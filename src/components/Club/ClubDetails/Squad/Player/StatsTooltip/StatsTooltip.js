import React from 'react';

import { Tooltip } from 'antd';

const StatsTooltip = ({text, data, className}) => {
  return (
    <Tooltip title={text}>
       <div className={className}>{data}</div>
    </Tooltip>
  )
}

export default StatsTooltip;
