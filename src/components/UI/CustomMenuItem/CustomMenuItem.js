import React from 'react';

import classes from './CustomMenuItem.module.css';

const CustomMenuItem = ({icon, text, onClick}) => {
  return (
    <div className={classes.item} onClick={onClick}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  )
}

export default CustomMenuItem;
