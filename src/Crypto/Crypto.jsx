import React, { useState, useEffect, useReducer } from 'react';
import { Layout, Menu, Input, Typography, Divider, List, Button, Avatar, message, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import YourFavorite from '../Component/YourFavorite';
import AllCrypto from '../Component/AllCrypto';
import favoriteReducer from '../redux/reducers/favoriteReducer';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [allCryptos, setAllCryptos] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, []);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data từ API khi component được mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 50,
            page: 1,
            sparkline: false,
          },
        });
        setAllCryptos(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Lọc danh sách dựa trên searchTerm
  const filteredCryptos = allCryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: 'white', width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
          <Menu.Item key="1" className='text-dark fw-bold fs-2 text-decoration-none'>Crypto Portfolio</Menu.Item>
        </Menu>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ width: 200 }}
          onChange={handleSearch}
        />
      </div>
      </Header>

      {/* Content */}
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Row gutter={[16, 16]}>
            {/* All Cryptocurrencies */}
            <Col span={12}>
              <AllCrypto cryptos={filteredCryptos} onAddToFavorite={dispatch} favorites={favorites} />
            </Col>

            {/* Your Favorites */}
            <Col span={12}>
              <YourFavorite favorites={favorites} onRemoveFavorite={dispatch} />
            </Col>
          </Row>
        </div>
      </Content>

      {/* Footer */}
      <Footer className='text-center'>
        Crypto Portfolio ©2023 Created by Your Name
      </Footer>
    </Layout>
  );
};

export default App;