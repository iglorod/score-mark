import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin, Tabs, Row, Col } from 'antd';
import { BorderlessTableOutlined, BoxPlotOutlined } from '@ant-design/icons';

import Game from './Game/Game';
import FixtureSummary from './FixtureSummary/FixtureSummary';
import FixtureStats from './FixtureStats/FixtureStats';
import { fetchFixturesActionCreator } from '../../store/fixture/actions';

const Tactic = ({ loading, fetchFixtures, windowWidth }) => {
  const [activeKey, setActiveKey] = useState('1');
  const [showMatchCentre, setShowMatchCentre] = useState(true);
  const { TabPane } = Tabs;

  useEffect(() => {
    fetchFixtures();
  }, [])

  useEffect(() => {
    if (!showMatchCentre && activeKey === '1') {
      setActiveKey('2');
    }
  }, [showMatchCentre])

  useEffect(() => {
    if (windowWidth < 1154) {
      setShowMatchCentre(false);
    } else {
      setShowMatchCentre(true);
    }
  }, [windowWidth])

  if (loading) return <Spin />

  const changeActiveKey = (key) => {
    setActiveKey(key);
  }

  return (
    <Row>
      <Col md={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }} >
        <Tabs
          activeKey={activeKey}
          onTabClick={(key) => changeActiveKey(key)}
        >
          <TabPane
            key='1'
            disabled={!showMatchCentre}
            tab={<><BorderlessTableOutlined /> {'Match Centre'}</>}
          >
            <FixtureSummary />
            <Game />
          </TabPane>

          <TabPane
            key='2'
            tab={<><BoxPlotOutlined /> {'Match Stats'}</>}
          >
            <FixtureStats />
          </TabPane>

          <TabPane
            key='3'
            tab='Tab 3'
          >
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
