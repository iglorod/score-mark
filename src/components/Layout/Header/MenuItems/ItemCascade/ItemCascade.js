import React from 'react';

import classes from './ItemCascade.module.css';

const ItemCascade = ({icon, text, onClick}) => {
  return (
    <div className={classes.item} onClick={onClick}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  )
}

export default ItemCascade;
