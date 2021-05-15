/**
 *
 * ResponsiveGrid
 *
 */

import React, { useState } from 'react';
import { Col, Card, Space, Typography, Badge } from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

const CustomCard = props => {
  const {
    gridConfig,
    direction,
    bordered,
    item,
    setRating,
  } = props;

  const [isLoading, setLoading] = useState(false);

  return (
    <Col
      xs={gridConfig.xs}
      sm={gridConfig.sm}
      md={gridConfig.md}
      lg={gridConfig.lg}
      xl={gridConfig.xl}
      xxl={gridConfig.xxl}
    >
      <Badge.Ribbon
        text='Likes: 10'
        color='#dc3545'
        placement='end'
      >
        <Card
          bordered={bordered}
          size='small'
          className='responsive-grid-title shadow-lg custom-card'
          title={
            <div className='d-flex flex-row align-items-center'>
              <div className='icon-img-container mr-3'>
                <img alt={item?.name} src={item?.image} className='icon-img' />
              </div>
              <Title level={4} className='text-white text-left mt-2 mb-2' ellipsis>{item?.name ?? 'N/A'}</Title>
            </div>
          }
          cover={
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title={item.title} className="embed-responsive-item" src={item?.url}></iframe>
            </div>
          }
        >
          <Card.Meta
            description={
              <Space
                direction={direction}
                className='w-100'
              >
                <a
                  href={`${item?.url}`}
                  target='blank'
                  className='link btn btn-warning mt-2 mb-2 font-weight-bold footer-btn'>
                  Upvote
              </a>
                <a
                  href={`${item?.url}`}
                  target='blank'
                  className='link btn btn-danger mt-2 mb-2 font-weight-bold footer-btn'>
                  Navigate
              </a>
              </Space>
            }
          />
        </Card>
      </Badge.Ribbon>
    </Col>
  )
};

CustomCard.propTypes = {
  gridConfig: PropTypes.object,
  direction: PropTypes.string,
  bordered: PropTypes.bool,
  item: PropTypes.object.isRequired,
};

CustomCard.defaultProps = {
  bordered: false,
  direction: 'vertical',
  title: null,
  gridConfig: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12,
  }
};

export default CustomCard;
