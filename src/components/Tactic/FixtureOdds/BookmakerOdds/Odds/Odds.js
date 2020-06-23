import React from 'react';

import Odd from './Odd/Odd';
import classes from './Odds.module.css';

const Odds = ({ odds }) => {
  return (
    <div className={classes.odds}>
      {
        odds.map((odd, index) => (
          <Odd odd={odd} key={index} />
        ))
      }
    </div>
  )
}

export default Odds;
