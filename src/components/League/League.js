import React from 'react';

import { Tabs } from 'antd';
import { DatabaseOutlined, DribbbleOutlined, PicCenterOutlined } from '@ant-design/icons'

import Standing from '../Standing/Standing';
import TopScorers from '../TopScorers/TopScorers';
import LeagueFixtures from '../LeagueFixtures/LeagueFixtures';

const League = () => {
  const { TabPane } = Tabs;

  return (
    <Tabs defaultActiveKey='1'>
      <TabPane
        key='1'
        tab={
          <span>
            <DatabaseOutlined /> {'League Standing'}
          </span>
        }
      >
        <Standing leagueId={'id'} />
      </TabPane>
      <TabPane
        key='2'
        tab={
          <span>
            <DribbbleOutlined /> {'Top Scorers'}
          </span>
        }
      >
        <TopScorers />
      </TabPane>
      <TabPane
        key='3'
        tab={
          <span>
            <PicCenterOutlined /> {'Fixtures'}
          </span>
        }
      >
        <LeagueFixtures />
      </TabPane>
    </Tabs>
  )
}

export default League;
