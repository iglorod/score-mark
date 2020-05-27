import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

import SignUp from '../../Authorization/SignUp/SignUp';
import SignIn from '../../Authorization/SignIn/SignIn';

const ContentComponent = () => {
  const { Content } = Layout;

  return (
    <Content className='content-layout-background'>
      <Switch>
        <Route path='/sign-up' component={SignUp} exact />
        <Route path='/sign-in' component={SignIn} exact />
        {/* <Route path='/leage' component={Band} exact />
        <Route path='/fixtures' component={Playlist} exact />
        <Route path='/fixture' component={Playlists} exact />
        <Route path='/team' component={Collection} exact />
        <Route path='/player' component={Admin} exact />
        <Route path='/' component={Main} /> */}
        <Route path='/' render={() => <div>Content</div>} />
      </Switch>
    </Content>
  )
}

export default ContentComponent;
