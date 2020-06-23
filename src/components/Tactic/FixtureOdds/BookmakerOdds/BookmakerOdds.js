import React from 'react';

import Bookmaker from './Bookmaker/Bookmaker';
import Odds from './Odds/Odds';
import classes from './BookmakerOdds.module.css';

const BookmakerOdds = ({ odd }) => {
  return (
    <div className={classes.odd}>
      <Bookmaker bookmakerName={odd.bookmaker_name} />
      <Odds odds={odd.bets} />
    </div>
  )
}

export default BookmakerOdds;
