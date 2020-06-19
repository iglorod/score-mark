import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'antd';

import ClubInfo from './ClubInfo/ClubInfo';
import ClubDetails from './ClubDetails/ClubDetails';
import { fetchClubStatsActionCreator, clearClubDataActionCreator } from '../../store/club/actions';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../../store/mode/actions';
import classes from './Club.module.css';

const Club = (props) => {
  useEffect(() => {
    props.fetchClubStats();

    return () => {
      props.clearClubData();
    }
  }, [props.fetchClubStats, props.clearClubData])

  useEffect(() => {
    if (!props.club) return;

    const clubId = props.club.team_id;
    props.openComments(`http://localhost:3000/club/${clubId}`, clubId.toString(), 'Club');

    return () => {
      props.closeComments();
    }
  }, [props.club, props.openComments, props.closeComments])

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

const mapStateToProps = (state) => {
  return {
    club: state.club.club,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubStats: () => { dispatch(fetchClubStatsActionCreator()) },
    clearClubData: () => { dispatch(clearClubDataActionCreator()) },
    openComments: (url, identifier, title) => { dispatch(openCommentsActionCreator(url, identifier, title)) },
    closeComments: () => { dispatch(closeCommentsActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Club);
