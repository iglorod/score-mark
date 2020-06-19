import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Scorers.module.css';

const Scorers = ({ clubId, events }) => {
  const scorers = events.reduce((scorers, event) => {
    if (event.team_id === clubId && event.type === 'Goal') {
      scorers.push(event);
    }

    return scorers;
  }, []);

  return (
    <div className={classes.scorers}>
      {
        scorers.map((event, index) => (
          <div className={classes.scoredData} key={index}>
            <span className={classes.minute}>{event.elapsed}{'\' '}</span>
            <Link
              to={{
                pathname: '/player',
                state: { id: event.player_id, }
              }}
              className={classes.scorer}
            >
              {event.player}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Scorers;
