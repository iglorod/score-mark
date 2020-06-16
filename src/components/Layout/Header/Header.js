import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import Leagues from './MenuItems/LeaguesCascader/LeaguesCascader';
import Fixtures from './MenuItems/Fixtures/Fixtures';
import Auth from './MenuItems/Auth/Auth';
import TodayFixtures from '../../TodayFixtures/TodayFixtures';
import SearchPlayers from '../../SearchPlayers/SearchPlayers';
import Logo from './Logo/Logo';

import './Header.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Header } = Layout;

const HeaderComponent = ({ loading }) => {
  const [openCascaderId, setOpenCascaderId] = useState(-1);

  const openCascader = (id) => {
    setOpenCascaderId(id);
  }

  const closeCascader = () => {
    setOpenCascaderId(-1);
  }

  return (
    <>
      <div className={'today-fixtures'}>
        <TodayFixtures />
      </div>
      <Header className='header'>
        <Logo />
        <div className={'search-bar'}>
          <SearchPlayers />
        </div>
        <div className={'auth-actions'}>
          <Auth />
        </div>
        <div className={'nav-actions'}>
          <Leagues
            cascaderIsOpen={openCascaderId === 0}
            openCascader={openCascader.bind(this, 0)}
            closeCascader={closeCascader} />
          <Fixtures
            cascaderIsOpen={openCascaderId === 1}
            openCascader={openCascader.bind(this, 1)}
            closeCascader={closeCascader} />
        </div>
      </Header>
      <div className={'bottomLine'}>
        <div className={loading ? 'loading' : 'stable'}></div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.submitting || state.club.loading || state.fxt.loading || state.plr.loading,
  }
}

export default connect(mapStateToProps)(HeaderComponent);
