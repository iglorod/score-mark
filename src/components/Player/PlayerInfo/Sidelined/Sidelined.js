import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin, Empty } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { fetchPlayerSidelinesActionCreator } from '../../../../store/player/actions';
import classes from './Sidelined.module.css';

const Sidelined = (props) => {
  const { stats, sidelined, fetchPlayerSidelines } = props;

  useEffect(() => {
    if (stats.length === 0) return;

    const playerId = stats[0].player_id;
    fetchPlayerSidelines(playerId)
  }, [stats, fetchPlayerSidelines])

  if (sidelined.length === 0 && stats.length === 0) return <Spin />;
  if (sidelined.length === 0) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

  return (
    <div className={classes.sidelined}>
      {
        sidelined.map((sideline, index) => (
          <div key={index} className={classes.sideline}>
            <div className={classes.icon}><CloseOutlined /></div>
            <div>{sideline.start}</div>
            <div>{sideline.end}</div>
            <div>{sideline.type}</div>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    stats: props.plr.stats,
    sidelined: props.plr.sidelined,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerSidelines: () => { dispatch(fetchPlayerSidelinesActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidelined);
