import React from 'react';

import { DotChartOutlined } from '@ant-design/icons';

import classes from './Formation.module.css';

const Formation = ({ formation }) => {
  return (
    <div className={classes.formation}>
      <span className={classes.label}>
        <DotChartOutlined /> {'Formation:'}
      </span>
      {formation}
    </div >
  )
}

export default Formation;
