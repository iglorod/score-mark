import React from 'react';
import { Link } from 'react-router-dom';

import EventLabel from './EventLabel/EventLabel';
import classes from './Event.module.css';

const Event = ({ event, team }) => {
  return (
    <div className={classes.event}>
      <div className={classes.eventAuthor}>
        <div>
          <img src={team.logo} className={classes.logo} alt={'club'} />
        </div>

        <div className={classes.elapsed}>
          {event.elapsed}{'\''}
          {event.elapsed_plus ? `+${event.elapsed_plus}` : null}
        </div>

        <div>
          <Link
            className={classes.player}
            to={{
              pathname: '/player',
              state: { id: event.player_id }
            }}
          >
            {event.player}
          </Link>
        </div>
      </div>
      <EventLabel type={event.type} detail={event.detail} />
    </div>
  )
}

export default Event;
