import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, LineChartOutlined, DollarOutlined, BulbOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Sider } = Layout;

const Navbar = () => {
  return (
    <Sider
      style={{ backgroundColor: '#001529', height: '100vh', position: 'fixed', left: 0 }}
      breakpoint="lg"
      collapsedWidth="80"
    >
      {/* Brand Name */}
      <div
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '16px',
          fontSize: '20px',
        }}
      >
        Cryptoverse
      </div>

      {/* Navigation Menu */}
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={['/']}>
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/cryptocurrencies" icon={<LineChartOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key="/exchanges" icon={<DollarOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item key="/news" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
