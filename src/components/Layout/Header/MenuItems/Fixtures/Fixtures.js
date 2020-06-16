import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { DatePicker } from 'antd';
import { ClockCircleFilled, CalendarFilled, StarFilled, DatabaseFilled } from '@ant-design/icons';

import ItemCascade from '../ItemCascade/ItemCascade';
import classes from './Fixtures.module.css';
import LeaguesCascader from '../LeaguesCascader/LeaguesCascader';
import '../MenuItems.css';

const Fixtures = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const closeDropdown = () => {
    setTimeout(() => props.closeCascader(), 300);
  }

  function onDatePicked(date) {
    setShowCalendar(false);

    props.history.push({
      pathname: '/fixtures',
      state: { date: date._d }
    })

    closeDropdown();
  }

  const toggleShowCalendar = () => {
    setShowCalendar(prevState => !prevState);
  }

  const hideCalendar = () => {
    setShowCalendar(false);
  }

  let calendar = null;
  if (showCalendar) {
    calendar = (
      <DatePicker
        open
        className={'popup-input'}
        autoFocus={true}
        onBlur={hideCalendar}
        onChange={onDatePicked} />
    )
  }

  return (
    <div className={classes.fixturesLinks}>
      <LeaguesCascader icon={<StarFilled />} text={'League'} path={'/league'} />
      <LeaguesCascader icon={<DatabaseFilled />} text={'Fixtures'} path={'/fixtures'} />
      <ItemCascade text={'From Date'} icon={<CalendarFilled />} onClick={toggleShowCalendar} />
      {calendar}

      <NavLink
        className={'action-button'}
        to={{
          pathname: '/fixtures',
          state: { inPlay: true, }
        }}
      >
        <ItemCascade icon={<ClockCircleFilled />} text={'In Play'} />
      </NavLink>
    </div>
  )
}

export default withRouter(Fixtures);
