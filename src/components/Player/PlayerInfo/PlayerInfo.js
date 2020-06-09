import React from 'react';

import { Tabs } from 'antd';
import { HeatMapOutlined, PlusCircleOutlined, SwapOutlined } from '@ant-design/icons';

import Stats from './Stats/Stats';
import Sidelined from './Sidelined/Sidelined';
import Transfers from './Transfers/Transfers';

const PlayerInfo = () => {
  const { TabPane } = Tabs;

  return (
    <Tabs defaultActiveKey='1'>
      <TabPane
        key='1'
        tab={<><HeatMapOutlined /> {'Statistics'}</>}
      >
        <Stats />
      </TabPane>

      <TabPane
        key='2'
        tab={<><PlusCircleOutlined /> {'Sidelined'}</>}
      >
        <Sidelined />
      </TabPane>

      <TabPane
        key='3'
        tab={<><SwapOutlined /> {'Transfers'}</>}
      >
        <Transfers />
      </TabPane>
    </Tabs>
    )
}

export default PlayerInfo;
