import React from 'react';

import { ExportOutlined } from '@ant-design/icons';

import classes from './Bookmaker.module.css';

const Bookmaker = ({ bookmakerName }) => {
  return (
    <div>
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
    </div>
  )
}

export default Bookmaker;
