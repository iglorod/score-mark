import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { Cascader } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import { LeagesByCountry } from '../../../../../FakeData/FakeData';
import '../MenuItems.css';

const Leagues = (props) => {
  const [countries, setCountries] = useState([{ label: 'Countries', value: null, loading: true }]);

  const dropDown = useRef(null);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=nativeName;alpha2Code')
      .then(response => response.data)
      .then(countries => countries.map(countrie => (
        { label: countrie.nativeName, value: countrie.alpha2Code, isLeaf: false, }
      )))
      .then(countries => setCountries(countries))
      .catch(error => console.log(error))
  }, [])

  const Label = (props) => (
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
    updateCountryLoadState({...targetOption});

    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagues/country/england/2018${'key'}`)
    // .then(response => response.data.api.results.leages)
    LeagesByCountry()
      .then(response => response.api.results.leagues)
      .then(leagues => leagues.map(league => (
        { label: <Label league={league} />, value: league.league_id, }
      )))
      .then(leagues => targetOption.children = leagues)
      .then(targetOption.loading = false)
      .then(() => updateCountryLoadState(targetOption))
      .catch(error => console.log(error))
  };

  const onChange = (value, selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];

    if (targetOption.isLeaf === undefined) {
      // props.push()     //load league component
      props.closeCascader();
    }
  };

  const togglePopup = () => {
    if (props.cascaderIsOpen) {
      props.closeCascader();
    } else {
      props.openCascader();
    }
  }

  return (
    <>
      <div className={'action-button'} onClick={togglePopup}><CaretDownOutlined /> Leagues</div>
      <Cascader
        ref={dropDown}
        className={'popup-input'}
        popupVisible={props.cascaderIsOpen}
        options={countries}
        loadData={loadData}
        onChange={onChange}
        changeOnSelect
      />
    </>
  )
}

export default Leagues;
