import React from 'react';
import { Link } from 'react-router-dom';

import Picture from '../../../../assets/images/logoWhite.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link className={classes.logoLink} to='/'>
        <div>
          <img src={Picture} alt={'logo'} />
        </div>
        <div className={classes.name}>Score<b>Mark</b></div>
      </Link>
    </div>
  )
}

export default Logo;
