import React from 'react';

import { Affix } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import classes from './Bookmaker.module.css';

const Bookmaker = ({ bookmakerName }) => {
  return (
    <Affix offsetTop={10}>
      <div className={classes.bookmaker}>
        <div className={classes.bookmakerName}>{bookmakerName}</div>
        <div className={classes.bookmakerPage}>
          <a
            href={`https://${bookmakerName.split(' ').join('')}.com`}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.bookmakerLink}
          >Visit site <ExportOutlined />
          </a>
        </div>
      </div>
    </Affix>
  )
}

export default Bookmaker;
