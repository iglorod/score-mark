import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin, Tabs, Row, Col } from 'antd';
import { BorderlessTableOutlined } from '@ant-design/icons';

import Game from './Game/Game';
import FixtureSummary from './FixtureSummary/FixtureSummary';
import { fetchFixturesActionCreator } from '../../store/fixture/actions';
import classes from './Tactic.module.css';

const Tactic = ({ loading, fetchFixtures, windowWidth }) => {
  const [showMatchCentre, setShowMatchCentre] = useState(true);
  const { TabPane } = Tabs;

  useEffect(() => {
    fetchFixtures();
  }, [])

  useEffect(() => {
    if (windowWidth < 600) {
      setShowMatchCentre(false);
    } else {
      setShowMatchCentre(true);
    }
  }, [windowWidth])

  if (loading) return <Spin />

  return (
    <Row>
      <Col md={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }} >
        <Tabs defaultActiveKey='1'>
          <TabPane
            key='1'
            disabled={!showMatchCentre}
            tab={<><BorderlessTableOutlined /> {'Match Centre'}</>}
          >
            <FixtureSummary />
            <Game />
          </TabPane>

          <TabPane tab='Tab 2' key='2'>
            {'Content of Tab Pane 2'}
          </TabPane>
          
          <TabPane tab='Tab 3' key='3'>
            {'Content of Tab Pane 3'}
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.fxt.loading,
    windowWidth: state.mode.windowWidth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFixtures: () => { dispatch(fetchFixturesActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tactic);
