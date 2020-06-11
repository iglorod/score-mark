import React from 'react';

import classes from './PageLabel.module.css';

const PageLabel = ({ current, closed }) => {
  return (
    <div className={classes.pageLabel}>
      <span className={classes.current}>{current}</span>
      <span className={classes.closed}> / {closed}</span>
    </div>
  )
}

export default PageLabel;
