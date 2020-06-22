import React from 'react';

import Substitutes from './Substitutes/Substitutes';
import SelectedPlayer from './SelectedPlayer/SelectedPlayer';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <Substitutes away={props.away} />
      <SelectedPlayer away={props.away} />
    </div>
  )
}

export default Sidebar;
