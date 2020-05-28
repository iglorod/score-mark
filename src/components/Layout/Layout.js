import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import './Layout.css';

import Header from './Header/Header';
import Content from './Content/Content';
import { signInLocallyActionCreator } from '../../store/authorization/actions';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';

const LayoutComponent = (props) => {
  const { signInLocally, loading } = props;

  useEffect(() => {
    signInLocally();
  }, [signInLocally])

  let content = (
    <Layout>
      <Layout>
        <Content />
      </Layout>
    </Layout>
  )
  if (loading) content = <ModalSpinner />

  return (
    <Layout className='main-layout'>
      <Header />
      {content}
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInLocally: () => { dispatch(signInLocallyActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
