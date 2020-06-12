import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';

import Logo from '../../../assets/images/logoWhite.png';
import Leagues from './MenuItems/Leagues/Leagues';
import Fixtures from './MenuItems/Fixtures/Fixtures';
import Auth from './MenuItems/Auth/Auth';
import TodayFixtures from '../../TodayFixtures/TodayFixtures';
import SearchPlayers from '../../SearchPlayers/SearchPlayers';

import './Header.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Header } = Layout;

const HeaderComponent = () => {
  const [openCascaderId, setOpenCascaderId] = useState(-1);

  const openCascader = (id) => {
    setOpenCascaderId(id);
  }

  const closeCascader = () => {
    setOpenCascaderId(-1);
  }

  return (
    <>
      <Header className='header'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt={'logo'} />
          </Link>
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
        <div className={'auth-actions'}>
          <Auth />
        </div>
        <div className={'search-bar'}>
          <SearchPlayers />
        </div>
      </Header>
      <div className={'today-fixtures'}>
        <TodayFixtures />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  }
}

export default connect(mapStateToProps)(HeaderComponent);
