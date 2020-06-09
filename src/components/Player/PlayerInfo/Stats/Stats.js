import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Table } from 'antd';

import Title from './Title/Title';
import {
  fetchPlayerStatsBySeasonActionCreator,
  fetchAvailibleSeasonsActionCreator,
} from '../../../../store/player/actions';
import './Stats.css';

const Stats = (props) => {
  const { stats, mobileMode, fetchPlayerStats, fetchAvailibleSeasons } = props;
  const [playerStats, setPlayerStats] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(new Date().getFullYear());

  useEffect(() => {
    fetchAvailibleSeasons();
  }, [fetchAvailibleSeasons])

  useEffect(() => {
    fetchPlayerStats(selectedSeason);
  }, [selectedSeason, fetchPlayerStats])

  useEffect(() => {
    moveTeamDataToTable(stats);
  }, [stats])

  const moveTeamDataToTable = (data) => {
    let dataSource = [];

    dataSource = data.map((league, index) => ({
      key: index,
      tournament: league.league,
      games: league.games.appearences,
      mins: league.games.minutes_played,
      goals: league.goals.total,
      assists: league.goals.assists,
      yellow: league.cards.yellow,
      red: league.cards.red,
      shots: (league.shots.on * 100) / (league.shots.total || 1),
      passes: league.passes.accuracy,
      rating: (+league.rating).toFixed(1),
    }))

    setPlayerStats(dataSource);
  }

  if (stats.length === 0) return null;

  const columns = [
    {
      title: mobileMode ? 'Trm' : 'Tournament',
      dataIndex: 'tournament',
      key: 'tournament',
    },
    {
      title: mobileMode ? 'GM' : 'Games',
      dataIndex: 'games',
      key: 'games',
    },
    {
      title: 'Mins',
      dataIndex: 'mins',
      key: 'mins',
    },
    {
      title: mobileMode ? 'GL' : 'Goals',
      dataIndex: 'goals',
      key: 'goals',
    },
    {
      title: mobileMode ? 'AS' : 'Assists',
      dataIndex: 'assists',
      key: 'assists',
    },
    {
      title: mobileMode ? 'Yel' : 'Yellow',
      dataIndex: 'yellow',
      key: 'yellow',
    },
    {
      title: 'Red',
      dataIndex: 'red',
      key: 'red',
    },
    {
      title: 'Sht%',
      dataIndex: 'shots',
      key: 'shots',
    },
    {
      title: 'Pas%',
      dataIndex: 'passes',
      key: 'passes',
    },
    {
      title: 'Rtg',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];

  const title = () => (
    <Title
      player={stats[0]}
      availibleSeasons={props.availibleSeasons}
      selectedSeason={selectedSeason}
      setSelectedSeason={setSelectedSeason} />
  )

  return (
    <Table
      title={title}
      loading={playerStats.length === 0}
      dataSource={playerStats}
      columns={columns}
      pagination={false} />
  )
}

const mapStateToProps = (state) => {
  return {
    mobileMode: state.mode.mobile,
    stats: state.plr.stats,
    availibleSeasons: state.plr.availibleSeasons,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerStats: (season) => { dispatch(fetchPlayerStatsBySeasonActionCreator(season)) },
    fetchAvailibleSeasons: () => { dispatch(fetchAvailibleSeasonsActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
