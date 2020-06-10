import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Table } from 'antd';

import TransferClubs from './TransferClubs/TransferClubs';
import { fetchPlayerTransfersActionCreator } from '../../../../store/player/actions';

const Transfers = (props) => {
  const { stats, fetchPlayerTransfers } = props;
  const [playerTransfers, setPlayerTransfers] = useState([]);

  useEffect(() => {
    if (stats.length === 0) return;

    const playerId = stats[0].player_id;
    fetchPlayerTransfers(playerId);
  }, [stats, fetchPlayerTransfers])

  useEffect(() => {
    if (props.transfers.length === 0) return;

    moveTeamDataToTable(props.transfers);
  }, [props.transfers])

  const moveTeamDataToTable = (data) => {
    let dataSource = [];

    dataSource = data.map((transfer, index) => ({
      key: index,
      date: transfer.transfer_date,
      type: transfer.type,
      transfer: <TransferClubs from={transfer.team_out} to={transfer.team_in} />,
      player: transfer.player_name,
    }))

    setPlayerTransfers(dataSource);
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Transfer',
      dataIndex: 'transfer',
      key: 'transfer',
    },
    {
      title: 'Player',
      dataIndex: 'player',
      key: 'player',
    },
  ];

  return (
    <Table
      loading={playerTransfers.length === 0}
      dataSource={playerTransfers}
      columns={columns}
      pagination={false} />
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.plr.stats,
    transfers: state.plr.transfers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerTransfers: (playerId) => { dispatch(fetchPlayerTransfersActionCreator(playerId)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
