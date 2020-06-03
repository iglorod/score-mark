import React from 'react';

import classes from './ClubLogo.module.css';

const ClubLogo = ({ src }) => {
  return (
    <div>
      <img className={classes.logo} src={src} alt={'club'} />
    </div>
  )
}

export default ClubLogo;
