/**
 *
 * ResponsiveGrid
 *
 */

import React from 'react';
import { Col, Card, Space, Typography, Rate } from 'antd';
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

  return (
    <Col
      xs={gridConfig.xs}
      sm={gridConfig.sm}
      md={gridConfig.md}
      lg={gridConfig.lg}
      xl={gridConfig.xl}
    >
      <Card
        bordered={bordered}
        size='small'
        className='responsive-grid-title shadow-lg custom-card'
        cover={
          <div style={{
            backgroundImage: `url(${item?.image})` ?? null,
          }}
            className='d-flex justify-content-center align-items-center image-container'
          >
            <div className='linear-gradient-container'>
              <div className='rating-container'>
                <div className='d-flex flex-row align-items-center'>
                  <Rate allowHalf defaultValue={item?.rating} onChange={val => setRating(item?.id, val)} />
                </div>
              </div>
            </div>
          </div>
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
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  }
};

export default CustomCard;
