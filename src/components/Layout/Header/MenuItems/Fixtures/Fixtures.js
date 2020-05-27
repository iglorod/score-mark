import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { Cascader, DatePicker } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import { LeagesByCountry } from '../../../../../FakeData/FakeData';
import '../MenuItems.css';

const Fixtures = (props) => {
  const dropDown = useRef(null);

  const [inPlayItem,] = useState({ label: 'In play', value: 'in play' });
  const [fromDateItem, setFromDateItem] = useState({
    label: <div onClick={openDatePicker}>From date</div>,
    value: 'from date',
    isLeaf: true,
  });
  const [fromLeague, setFromLeague] = useState({ label: 'From league', value: 'from league', isLeaf: false, });

  useEffect(() => {
    if (!props.cascaderIsOpen) {
      closeDatePicker();
      closeDatePicker();
      closeDatePicker();
    }
  }, [props.cascaderIsOpen])

  const fetchCountries = (targetOption) => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=nativeName;alpha2Code')
      .then(response => response.data)
      .then(countries => countries.map(countrie => (
        { label: countrie.nativeName, value: countrie.alpha2Code, isLeaf: false, }
      )))
      .then(countries => targetOption.children = countries)
      .then(() => console.log(targetOption))
      .then(() => targetOption.loading = false)
      .then(() => setFromLeague(targetOption))
      .then(() => console.log(fromLeague))
      .catch(error => console.log(error))
  }

  function DatePickerItem({ onChange, onClick }) {
    return (
      <>
        <DatePicker className={'popup-input'} open onChange={onChange} />
        <span onClick={onClick}>From date</span>
      </>
    )
  }

  const Label = (props) => (
    <>
      <img className={'league-logo'} src={props.league.logo} />
      {props.league.name}
    </>
  )

  const fetchLeagues = (targetOption) => {
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
  }

  const updateCountryLoadState = (countryTarget) => {
    const countriesClone = [...fromLeague.children];
    const countryIndex = countriesClone.findIndex(country => country.value === countryTarget.value);
    countriesClone[countryIndex] = { ...countryTarget };
    setFromLeague({
      ...fromLeague,
      children: [...countriesClone]
    });
  }

  const loadData = selectedOptions => {
    const targetOption = { ...selectedOptions[selectedOptions.length - 1] };
    targetOption.loading = true;

    if (targetOption.value === 'from league') {
      setFromLeague({ ...targetOption });
      fetchCountries(targetOption);
    }
    else {
      updateCountryLoadState(targetOption);
      fetchLeagues(targetOption);
    }
  };

  const closeDatePicker = () => {
    console.log('close');
    const datePickerClone = { ...fromDateItem };
    datePickerClone.label = <div onClick={openDatePicker}>From date</div>;
    setFromDateItem({ ...datePickerClone });
  }

  function openDatePicker() {
    const datePickerClone = { ...fromDateItem };
    datePickerClone.label = <DatePickerItem onClick={closeDatePicker} onChange={onDatePicked} />;

    setFromDateItem({ ...datePickerClone });
  }

  function onDatePicked(date) {
    console.log('date', date);
  }

  const onChange = (value, selectedOptions) => {
    const targetOption = { ...selectedOptions[selectedOptions.length - 1] };
    if (targetOption.isLeaf === undefined) {
      // props.push()     //load league component
      props.closeCascader();
    }
  }

  const togglePopup = () => {
    if (props.cascaderIsOpen) {
      props.closeCascader();
    } else {
      props.openCascader();
    }
  }

  return (
    <>
      <div className={'action-button'} onClick={togglePopup}><CaretDownOutlined /> Fixtures</div>
      <Cascader
        ref={dropDown}
        className={'popup-input'}
        popupVisible={props.cascaderIsOpen}
        options={[inPlayItem, fromDateItem, fromLeague]}
        loadData={loadData}
        onChange={onChange}
        changeOnSelect
      />
    </>
  )
}

export default Fixtures;
