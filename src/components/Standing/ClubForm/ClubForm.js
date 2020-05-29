import React from 'react';

import { Avatar } from 'antd';

import classes from './ClubForm.module.css';

const ClubForm = ({ form }) => {
  const colors = {
    W: '#13cf00',
    L: '#d81920',
  }

  return form.split('').map((matchResult, index) => (
    <Avatar
      key={index}
      className={classes.result}
      style={{ backgroundColor: colors[matchResult] }}
    >
      {matchResult}
    </Avatar>
  ))
}

export default ClubForm;
