import React, { useContext } from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import map from 'lodash/map';
import size from 'lodash/size';
import isEqual from 'lodash/isEqual';

import AppContext from '../../context/context';
import PortfolioItem from '../../components/PortfolioItem';
import SearchComponent from '../../components/SearchComponent';
import SortingFilters from '../../components/SortingFilters';

const { Title } = Typography;

const Portfolio = () => {
  const {
    blogs,
    filterFavourites,
    setTextInputValue,
    sortKey,
    searchKey,
    sortBy,
    setUpvote,
  } = useContext(AppContext);

  return (
    <div className='portfolio-page'>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <SearchComponent
            filterFavourites={filterFavourites}
            sortKey={sortKey}
            searchKey={searchKey}
            setTextInputValue={setTextInputValue}
          />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <SortingFilters sortKey={sortKey} sortBy={sortBy} />
        </Col>
      </Row>

      <Divider orientation="center" className='pt-4 pb-4' style={{ borderTopColor: '#dc3545' }}>
        <Title level={2} className='text-danger text-left font-italic m-0'>My Creations</Title>
      </Divider>

      {isEqual(size(blogs?.myCreations), 0) ? (
        <Title level={3} className='text-danger text-left m-0'>No creations found!</Title>
      ) : (
        <Row gutter={[30, 30]}>
          { map(blogs?.myCreations, item => <PortfolioItem key={item.id} item={item} setUpvote={setUpvote} direction='horizontal' />)}
        </Row>
      )}

      <Divider orientation="center" className='pt-4 pb-4' style={{ borderTopColor: '#dc3545' }}>
        <Title level={2} className='text-danger text-left font-italic m-0'>My Favourites</Title>
      </Divider>

      {isEqual(size(blogs?.myFavourites), 0) ? (
        <Title level={3} className='text-danger text-left m-0'>No favourites found!</Title>
      ) : (
        <Row gutter={[30, 30]}>
          {map(blogs?.myFavourites, item => <PortfolioItem key={item.id} item={item} setUpvote={setUpvote} direction='horizontal' />)}
        </Row>
      )}
    </div>
  );
};

export default Portfolio;