import React from 'react';
import { useLocation } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Typography, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUtensils, faBorderStyle, faAward } from '@fortawesome/free-solid-svg-icons';

const { Title, Text } = Typography;

const Details = () => {
  const { state: { item } } = useLocation();

  return (
    <>
      <div style={{
        backgroundImage: `url(${item?.Image})` ?? null
      }}
        className='shadow-lg details-page-image'
      >
        <div className='d-flex justify-content-center align-items-center semi-transparent-view'>
          <Title className='text-danger brand-name'>
            {item.Brand}
          </Title>
          <div className='rating-container'>
            <div className='d-flex flex-row align-items-center'>
              <StarRatings
                rating={item?.Stars}
                starRatedColor='#FADB1A'
                starEmptyColor='#F0F0F0'
                starDimension='20px'
                starSpacing='3px'
              />
              <Text className='text-white pt-1 pl-2 font-italic rating-number-text'>
                {parseFloat(item?.Stars).toFixed(2)}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <Space
        direction='vertical'
        className='w-100 p-3'
      >
        <Title level={3} className='text-light text-left'>
          <FontAwesomeIcon icon={faUtensils} color='#dc3545' /> <span className='p-lg-2'>{item?.Variety ?? 'N/A'}</span>
        </Title>
        <Title level={3} className='text-light text-left'>
          <FontAwesomeIcon icon={faAward} color='#dc3545' /> <span className='p-lg-2'>{item?.['Top Ten'] ?? 'N/A'}</span>
        </Title>
        <Title level={3} className='text-light text-left'>
          <FontAwesomeIcon icon={faGlobe} color='#dc3545' /> <span className='p-lg-2'>{item?.Country ?? 'N/A'}</span>
        </Title>
        <Title level={3} className='text-light text-left'>
          <FontAwesomeIcon icon={faBorderStyle} color='#dc3545' /> <span className='p-lg-2'>{item?.Style ?? 'N/A'}</span>
        </Title>
      </Space>
    </>
  );
}

export default Details;