import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { DatePicker } from 'antd';
import { ClockCircleFilled, CalendarFilled, StarFilled, AppstoreFilled } from '@ant-design/icons';

import ItemCascade from '../ItemCascade/ItemCascade';
import classes from './Fixtures.module.css';
import LeaguesCascader from '../LeaguesCascader/LeaguesCascader';
import '../MenuItems.css';

const Fixtures = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [openCascaderId, setOpenCascaderId] = useState(-1);

  const openCascader = (id) => {
    setOpenCascaderId(id);
  }

  const closeCascader = () => {
    setOpenCascaderId(-1);
  }

  function onDatePicked(date) {
    setShowCalendar(false);

    props.history.push({
      pathname: '/fixtures',
      state: { date: date._d }
    })
 
    closeCascader();
  }

  const toggleShowCalendar = () => {
    setShowCalendar(prevState => !prevState);
  }

  const hideCalendar = () => {
    setShowCalendar(false);
  }

  return (
    <div className={classes.fixturesLinks}>
      <LeaguesCascader
        icon={props => <StarFilled {...props} />}
        text={'League'}
        path={'/league'}
        cascaderIsOpen={openCascaderId === 0}
        openCascader={openCascader.bind(this, 0)}
        closeCascader={closeCascader} />

      <LeaguesCascader
        icon={props => <AppstoreFilled {...props} />}
        text={'Fixtures'}
        path={'/fixtures'}
        cascaderIsOpen={openCascaderId === 1}
        openCascader={openCascader.bind(this, 1)}
        closeCascader={closeCascader} />

      <ItemCascade text={'Date'} icon={<CalendarFilled />} onClick={toggleShowCalendar} />
      <DatePicker
        open={showCalendar}
        className={'popup-input'}
        autoFocus={true}
        onOpenChange={open => open ? null : hideCalendar()}
        onChange={onDatePicked} />

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
