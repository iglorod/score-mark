import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { Cascader } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';

import ItemCascade from '../ItemCascade/ItemCascade';
import { LeagesByCountry } from '../../../../../FakeData/FakeData';
import classes from './LeaguesCascader.module.css';
import '../MenuItems.css';

const LeaguesCascader = (props) => {
  const cascader = useRef(null);
  const { icon, text, path } = props;

  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([{ label: 'Countries', value: null, loading: true }]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=nativeName;alpha2Code')
      .then(response => response.data)
      .then(countries => countries.map(countrie => (
        { label: <CountryLabel text={countrie.nativeName} />, value: countrie.alpha2Code, isLeaf: false, }
      )))
      .then(countries => setCountries(countries))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (props.cascaderIsOpen === true) {
      setTimeout(() => setLoading(false), 700)
    }
  }, [props.cascaderIsOpen])

  const CountryLabel = ({ text }) => (
    <>
      <EnvironmentFilled />
      <span className={classes.countryName}>{text}</span>
    </>
  )

  const ClubLabel = (props) => (
    <>
      <img className={'league-logo'} src={props.league.logo} />
      {props.league.name}
    </>
  )

  const updateCountryLoadState = (countryTarget) => {
    const countriesClone = [...countries];
    const countryIndex = countries.findIndex(country => country.value === countryTarget.value);
    countriesClone[countryIndex] = { ...countryTarget };
    setCountries([...countriesClone]);
  }

  const loadData = selectedOptions => {
    const targetOption = { ...selectedOptions[selectedOptions.length - 1] };
    targetOption.loading = true;
    updateCountryLoadState({ ...targetOption });

    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagues/country/england/2018${'key'}`)
    // .then(response => response.data.api.results.leages)
    LeagesByCountry()
      .then(response => response.api.results.leagues)
      .then(leagues => leagues.map(league => (
        { label: <ClubLabel league={league} />, value: league.league_id, }
      )))
      .then(leagues => targetOption.children = leagues)
      .then(targetOption.loading = false)
      .then(() => updateCountryLoadState(targetOption))
      .catch(error => console.log(error))
  };

  const onChange = (value, selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];

    if (targetOption.isLeaf === undefined) {
      props.history.push({
        pathname: path,
        state: {
          leagueId: targetOption.value,
        }
      })
      props.closeCascader();
    }
  };

  const togglePopup = () => {
    if (props.cascaderIsOpen) {
      props.closeCascader();
    } else {
      setLoading(true);
      props.openCascader();
    }
  }

  icon.spin = true;

  return (
    <div>
      <div className={'action-button'}>
        <ItemCascade
          icon={loading ? icon({ spin: true }) : icon()}
          text={text}
          onClick={togglePopup} />
      </div>
      <Cascader
        ref={cascader}
        className={'popup-input'}
        popupVisible={props.cascaderIsOpen}
        options={countries}
        loadData={loadData}
        onChange={onChange}
        onPopupVisibleChange={visible => visible ? null : props.closeCascader()}
        changeOnSelect
      />
    </div>
  )
}

export default withRouter(LeaguesCascader);
