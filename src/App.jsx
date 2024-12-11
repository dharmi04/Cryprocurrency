import React from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import Navbar from './components/Navbar';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Navbar (with Sidebar functionality) */}
      <Navbar />

      {/* Main Layout */}
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ padding: '24px', background: '#f0f2f5' }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
          ©2024 Cryptoverse. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
