import React from 'react';

import { Tabs } from 'antd';
import { ProfileOutlined, PercentageOutlined } from '@ant-design/icons';

import Squad from './Squad/Squad';
import Stats from './Stats/Stats';
import classes from './ClubDetails.module.css';

const ClubDetails = () => {
  const { TabPane } = Tabs;

  return (
    <Tabs className={classes.clubDetails} defaultActiveKey='1'>
      <TabPane
        key='1'
        tab={<><ProfileOutlined /> {'Club Squad'}</>}
      >
        <Squad />
      </TabPane>

      <TabPane
        key='2'
        tab={<><PercentageOutlined /> {'Club Stats'}</>}
      >
        <Stats />
      </TabPane>
    </Tabs>
  )
}

export default ClubDetails;
