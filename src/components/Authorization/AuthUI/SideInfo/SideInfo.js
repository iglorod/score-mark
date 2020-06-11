import React from 'react';

import Logo from '../../../../assets/images/logoWhiteSimple.png';
import backgroundImage from '../../../../assets/images/auth-image.png';
import classes from './SideInfo.module.css';

const SideInfo = ({ title }) => {
  return (
    <div className={classes.infoSection}>
      <img src={backgroundImage} className={classes.backgroundImage} alt={'logo'} />
      <div className={classes.info}>
        <div className={classes.logoWrapper}>
          <img src={Logo} className={classes.logo} alt={'logo'} />
        </div>

        <div>
          <span className={classes.label} level={3}>{title}</span>
          <span className={classes.hymn}>Augue ut lectus!</span>
        </div>

        <div className={classes.description}>
          {
            'Scelerisque eleifend donec pretium vulputate sapien nec sagittis.'
            + 'Velit dignissim sodales ut eu sem integer vitae. Sollicitudin aliquam ultrices'
            + 'sagittis orci a scelerisque. Facilisi cras fermentum odio eu feugiat pretium'
            + 'nibh ipsum consequat.'
          }
        </div>

        <div className={classes.footer}>© 2020</div>
      </div>
    </div>
  )
}

export default SideInfo;
