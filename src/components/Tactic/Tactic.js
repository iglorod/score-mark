import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin } from 'antd';

import Formation from './Formation/Formation';
import { fetchFixturesActionCreator } from '../../store/fixture/actions';
import classes from './Tactic.module.css';

const Tactic = ({ loading, fetchFixtures }) => {
  useEffect(() => {
    fetchFixtures();
  }, [])

  if (loading) return <Spin />

  return (
    <div>
      <Formation />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.fxt.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFixtures: () => { dispatch(fetchFixturesActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tactic);
