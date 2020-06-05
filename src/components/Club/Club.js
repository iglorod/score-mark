import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'antd';

import ClubInfo from './ClubInfo/ClubInfo';
import ClubDetails from './ClubDetails/ClubDetails';
import { fetchClubStatsActionCreator, clearClubDataActionCreator } from '../../store/club/actions';
import classes from './Club.module.css';

const Club = (props) => {
  const { fetchClubStats, clearClubData } = props;

  useEffect(() => {
    fetchClubStats();

    return () => {
      clearClubData();
    }
  }, [fetchClubStats, clearClubData])

  return (
    <Row>
      <Col md={{ span: 18, offset: 3 }} lg={{ span: 16, offset: 4 }} >
        <div className={classes.club}>
          <ClubInfo />
          <ClubDetails />
        </div>
      </Col>
    </Row>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubStats: () => { dispatch(fetchClubStatsActionCreator()) },
    clearClubData: () => { dispatch(clearClubDataActionCreator()) },
  }
}

export default connect(null, mapDispatchToProps)(Club);
