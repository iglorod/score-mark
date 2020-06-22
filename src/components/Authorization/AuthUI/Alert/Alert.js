import React from 'react';

import { Alert, Row, Col } from 'antd';

const AlertMessage = ({ errorMessage }) => {
  const GridAlert = (() =>
    <Row justify='center' align='middle'>
      <Col xs={24} sm={{ span: 12 }} >
        <Alert message={errorMessage.match(/[^a-z]/g, '')} type='error' showIcon />
      </Col>
    </Row>
  )
  return (
    errorMessage !== null
      ? <GridAlert />
      : null
  )
}

export default AlertMessage;
