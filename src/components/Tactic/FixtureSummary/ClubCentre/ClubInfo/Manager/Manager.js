import React from 'react';

import { UserOutlined } from '@ant-design/icons';

import classes from './Manager.module.css';

const Manager = ({ coach }) => {
  return (
    <div className={classes.manager}>
      <span className={classes.label}>
        <UserOutlined /> {'Manager:'}
      </span>
      {coach}
    </div>
  )
}

export default Manager;
