import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin, Tabs, Row, Col } from 'antd';
import { BorderlessTableOutlined, BoxPlotOutlined, AudioOutlined, PieChartOutlined } from '@ant-design/icons';

import Game from './Game/Game';
import FixtureSummary from './FixtureSummary/FixtureSummary';
import FixtureStats from './FixtureStats/FixtureStats';
import FixtureEvents from './FixtureEvents/FixtureEvents';
import FixtureOdds from './FixtureOdds/FixtureOdds';
import { fetchFixturesActionCreator, clearFixtureActionCreator } from '../../store/fixture/actions';

const Tactic = (props) => {
  const [activeKey, setActiveKey] = useState('1');
  const [showMatchCentre, setShowMatchCentre] = useState(true);
  const { TabPane } = Tabs;

  const { loading, fixture, windowWidth } = props;

  useEffect(() => {
    props.fetchFixtures();
    
    return () => {
      props.clearFixture();
    }
  }, [props.fetchFixtures, props.clearFixture])

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

  if (loading || !fixture) return <Spin />

  const changeActiveKey = (key) => {
    setActiveKey(key);
  }

  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }} >
        <FixtureSummary />

        <Tabs
          activeKey={activeKey}
          onTabClick={(key) => changeActiveKey(key)}
        >
          <TabPane
            key='1'
            disabled={!showMatchCentre}
            tab={<><BorderlessTableOutlined /> {'Match Centre'}</>}
          >
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
            tab={<><AudioOutlined /> {'Match Events'}</>}
          >
            <FixtureEvents />
          </TabPane>

          <TabPane
            key='4'
            tab={<><PieChartOutlined /> {'Match Odds'}</>}
          >
            <FixtureOdds />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {
    fixture: state.fxt.fixture,
    loading: state.fxt.loading,
    windowWidth: state.mode.windowWidth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFixtures: () => { dispatch(fetchFixturesActionCreator()) },
    clearFixture: () => { dispatch(clearFixtureActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tactic);
