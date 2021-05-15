/**
 *
 * ResponsiveGrid
 *
 */

import React, { useState } from 'react';
import { Col, Card, Space, Typography, Rate } from 'antd';
import PropTypes from 'prop-types';

const { Title, Text } = Typography;

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
      <Card
        bordered={bordered}
        size='small'
        className='responsive-grid-title shadow-lg custom-card'
        title={<Title level={4} className='text-white text-left mt-2 mb-2' ellipsis>{item?.name ?? 'N/A'}</Title>}
        cover={
          <div className="embed-responsive embed-responsive-16by9">
            <iframe title={item.title} className="embed-responsive-item" src='https://angular.io/'></iframe>
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
                className='link btn btn-danger w-100 mt-2 mb-2 font-weight-bold'>
                Navigate
              </a>
            </Space>
          }
        />
      </Card>
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
