import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import SignUp from '../../Authorization/SignUp/SignUp';
import SignIn from '../../Authorization/SignIn/SignIn';
import Fixtures from '../../Fixtures/Fixtures';
import Fixture from '../../Fixture/Fixture';
import League from '../../League/League';
import Club from '../../Club/Club';
import Player from '../../Player/Player';
import News from '../../News/News';
import Comments from '../../Comments/Comments';
import AnimatedSwitch from '../../UI/AnimatedSwitch/AnimatedSwitch';

const ContentComponent = ({ url, identifier, title }) => {
  const { Content } = Layout;

  const renderCoponentWithComments = (component) => (
    <>
      {component}
      <Comments
        url={url}
        identifier={identifier}
        title={title} />
    </>
  )

  return (
    <Content className='content-layout-background'>
      <AnimatedSwitch classProp={'pageComponentWrapper'}>
        <Route path='/sign-up' component={SignUp} exact />
        <Route path='/sign-in' component={SignIn} exact />
        <Route path='/fixture' render={renderCoponentWithComments.bind(this, <Fixture />)} exact />
        <Route path='/fixtures' component={Fixtures} exact />
        <Route path='/league' component={League} exact />
        <Route path='/club' render={renderCoponentWithComments.bind(this, <Club />)} exact />
        <Route path='/player' render={renderCoponentWithComments.bind(this, <Player />)} exact />
        <Route path='/' component={News} />
      </AnimatedSwitch>
    </Content>
  )
}

const mapStateToProps = (state) => {
  return {
    url: state.mode.url,
    identifier: state.mode.identifier,
    title: state.mode.title,
  }
}

export default connect(mapStateToProps)(ContentComponent);
