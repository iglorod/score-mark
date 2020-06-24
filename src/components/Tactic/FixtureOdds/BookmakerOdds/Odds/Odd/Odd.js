import React, { useState, useEffect } from 'react';

import { Progress, Divider } from 'antd';

import classes from './Odd.module.css';

const Odd = ({ odd }) => {
  const [maxOdd, setMaxOdd] = useState(0);

  useEffect(() => {
    const max = odd.values.reduce((max, item) => max > item.odd ? max : item.odd, 0);
    setMaxOdd(max);
  }, [])

  return (
    <>
      <div className={classes.oddItem}>
        <div className={classes.oddName}>{odd.label_name}</div>
        <div className={classes.bookmakerOdds}>
          {
            odd.values.map((item, index) => (
              <div className={classes.odd} key={index}>
                <div className={classes.oddTitle}>
                  <div>{item.value}</div>
                  <div>Coef</div>
                </div>
                <div className={classes.oddLabels}>
                  <div>
                    <Progress
                      percent={(maxOdd / item.odd * 100).toFixed(0)}
                      type='circle'
                      width={40} />
                  </div>
                  <div className={classes.oddValueProgress}>
                    <Progress
                      percent={(maxOdd / item.odd * 100).toFixed(0)}
                      size='small'
                      showInfo={false} />
                  </div>
                  <div className={classes.oddValue}>
                    {item.odd}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Divider />
    </>
  )
}

export default Odd;
