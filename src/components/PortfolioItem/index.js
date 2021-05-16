import React from 'react';
import { Col, Card, Space, Typography, Badge } from 'antd';

const { Title } = Typography;

const PortfolioItem = props => {
  const {
    gridConfig,
    direction,
    bordered,
    item,
    setUpvote,
  } = props;

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
        text={`Likes: ${item?.upvote}`}
        color='#dc3545'
        placement='end'
      >
        <Card
          bordered={bordered}
          size='small'
          className='responsive-grid-title shadow-lg custom-card'
          title={
            <div className='d-flex flex-row align-items-center position-relative'>
              <div className='icon-img-container position-absolute'>
                <img alt={item?.name} src={item?.image} className='icon-img' />
              </div>
              <Title level={4} className='text-white text-left mt-2 mb-2 ml-5 mr-5' ellipsis>{item?.name ?? 'N/A'}</Title>
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
                <button
                  className='link btn btn-warning mt-2 mb-2 font-weight-bold footer-btn'
                  onClick={() => setUpvote(item?.id)}
                >
                  Upvote
                </button>
                <a
                  href={`${item?.url}`}
                  target='blank'
                  className='link btn btn-danger mt-2 mb-2 font-weight-bold footer-btn'
                >
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

PortfolioItem.propTypes = {
  ...PortfolioItem,
};

PortfolioItem.defaultProps = {
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

export default PortfolioItem;