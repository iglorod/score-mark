import React from 'react';
import { connect } from 'react-redux';

import Event from './Event/Event';

import classes from './FixtureEvents.module.css';

const FixtureEvents = ({ fixture }) => {
  const homeTeam = fixture.homeTeam;
  const awayTeam = fixture.awayTeam;

  return (
    <div className={classes.fixtureEvents}>
      {
        fixture.events.map((event, index) => (
          <Event
            key={index}
            event={event}
            team={event.team_id === homeTeam.team_id ? homeTeam : awayTeam} />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
  }
}

export default connect(mapStateToProps)(FixtureEvents);
