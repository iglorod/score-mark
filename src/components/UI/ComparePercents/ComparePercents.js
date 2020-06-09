import React from 'react';

import classes from './ComparePercents.module.css';

const ComparePercents = ({ title, first, last }) => {
  let leftWidth = first.toString() || '0';
  let rightWidth = last.toString() || '0';

  if (leftWidth === '0' && rightWidth === '0') {
    console.log(title)
    console.log(+leftWidth, +rightWidth)
    return null;
  }

  if (!leftWidth.includes('%')) {
    const totalVal = (+first) + (+last);

    leftWidth = (first * 100 / totalVal) + '%';
    rightWidth = (last * 100 / totalVal) + '%';
  }

  return (
    <div className={classes.comparePercents}>
      <div className={classes.title}>{title}</div>
      <div className={classes.percents}>
        <div className={classes.firstPercents} style={{ width: leftWidth }}>
          <span className={classes.value}>{first}</span>
        </div>
        <div className={classes.lastPercents} style={{ width: rightWidth }}>
          <span className={classes.value}>{last}</span>
        </div>
      </div>
    </div>
  )
}

export default ComparePercents;
