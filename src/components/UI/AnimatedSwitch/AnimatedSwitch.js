import React from 'react';
import { spring, AnimatedSwitch } from 'react-router-transition';

import classes from './AnimatedSwitch.module.css';

const animatedSwitch = (props) => {
  const mapStyles = (styles) => {
    return {
      opacity: styles.opacity,
      transform: styles.opacity === 1 ? 'unset' : `scale(${styles.scale})`,
    };
  }
  
  const bounce = (val) => {
    return spring(val, {
      stiffness: 100,
      damping: 20,
    });
  }

  const bounceTransition = {
    atEnter: {
      opacity: 0,
      scale: 0.8,
    },
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

  let switchClass = classes.pageWrapper;
  if (props.classProp) switchClass = classes[props.classProp];

  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className={switchClass}
    >
      {props.children}
    </AnimatedSwitch>
  )
}

export default animatedSwitch;
