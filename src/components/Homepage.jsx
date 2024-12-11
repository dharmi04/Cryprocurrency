import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoAPI';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10); // Fetching only the top 10 cryptocurrencies

  const globalStats = data?.data?.stats;
  
  if (isFetching) return 'Loading....'; // Show loading while data is fetching

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the World</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>

      {/* Pass simplified prop to Cryptocurrencies */}
      <Cryptocurrencies simplified={true} /> 

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show more</Link></Title>
      </div>

      {/* Simplified prop for News */}
      <News simplified={true} />
    </>
  );
};

export default Homepage;
