import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { Row, Col } from 'antd'; 

const Comments = ({ url, identifier, title }) => {
  return (
    <Row>
      <Col md={{ span: 18, offset: 3 }} lg={{ span: 16, offset: 4 }} >
        <DiscussionEmbed
          shortname={process.env.REACT_APP_DISQUS_SHORTNAME}
          config={
            {
              url,
              identifier,
              title,
            }
          }
        />
      </Col>
    </Row>
  )
}

export default Comments;
