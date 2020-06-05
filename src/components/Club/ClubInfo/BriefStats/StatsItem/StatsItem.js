import React from 'react';

import { Avatar, Tooltip } from 'antd';

import classes from './StatsItem.module.css';

const StatsItem = ({ tooltip, value }) => {
  return (
    <Tooltip title={tooltip}>
      <div>
        <Avatar className={value >= 0 ? classes.greenAvatar : classes.redAvatar}>{value}</Avatar>
      </div>
    </Tooltip>
  )
}

export default StatsItem;
