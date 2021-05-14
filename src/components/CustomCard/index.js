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
        cover={
          <>
            <img
              alt=""
              src={item?.image}
              className='position-absolute image-container'
              onLoadStart={() => setLoading(true)}
              onLoad={() => console.log('Load Success!')}
              onError={() => console.log('Load Failed!!!')}
            />
            <div className='linear-gradient-container'>
              <div className='rating-container'>
                <div className='d-flex flex-row align-items-center'>
                  <Rate allowHalf value={item?.rating} onChange={val => setRating(item?.id, val)} />
                  <Text className='text-white pt-1 pl-2 font-italic rating-number-text'>
                    {item?.rating}
                  </Text>
                </div>
              </div>
            </div>
          </>
        }
      >
        <Card.Meta
          description={
            <Space
              direction={direction}
              className='w-100'
            >
              <Title level={4} className='text-danger text-left mt-1' ellipsis>{item?.name ?? 'N/A'}</Title>
              <a
                href={`${item?.url}`}
                target='blank'
                className='link btn btn-danger w-100 mt-0 mb-2 font-weight-bold'>
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
