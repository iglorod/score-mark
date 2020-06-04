import React from 'react';

import Icons from '../../../../../assets/images/icons.png';
import classes from './EventLabel.module.css';

const EventLabel = (props) => {
  let margins = [0];

  switch (props.type) {
    case 'Card': {
      if (!props.detail.includes('Yellow')) {
        margins = [-15];
      }
      break;
    }
    case 'subst': {
      margins = [-46, -61];
      break;
    }
    case 'Goal': {
      margins = [-30];
      break;
    }
  }

  const Label = ({ text, marginTop }) => (
    <div className={classes.label}>
      <div
        className={classes.icon}
        style={{
          backgroundImage: `url(${Icons})`,
          backgroundPosition: `0 ${marginTop}px`
        }}
      >
      </div>
      <div>{text}</div>
    </div>
  )

  return (
    <div className={classes.labels}>
      {
        margins.map((marginTop, index) => (
          <Label
            key={index}
            text={props.detail || props.type}
            marginTop={marginTop} />
        ))
      }
    </div>
  )
}

export default EventLabel;
