import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';

import SignUp from '../../Authorization/SignUp/SignUp';
import SignIn from '../../Authorization/SignIn/SignIn';
import Fixtures from '../../Fixtures/Fixtures';
import Fixture from '../../Fixture/Fixture';
import League from '../../League/League';
import Club from '../../Club/Club';
import Player from '../../Player/Player';
import News from '../../News/News';
import AnimatedSwitch from '../../UI/AnimatedSwitch/AnimatedSwitch';

const ContentComponent = () => {
  const { Content } = Layout;

  return (
    <Content className='content-layout-background'>
      <AnimatedSwitch classProp={'pageComponentWrapper'}>
        <Route path='/sign-up' component={SignUp} exact />
        <Route path='/sign-in' component={SignIn} exact />
        <Route path='/fixture' component={Fixture} exact />
        <Route path='/fixtures' component={Fixtures} exact />
        <Route path='/league' component={League} exact />
        <Route path='/club' component={Club} exact />
        <Route path='/player' component={Player} exact />
        <Route path='/' component={News} />
      </AnimatedSwitch>
    </Content>
  )
}

export default ContentComponent;
