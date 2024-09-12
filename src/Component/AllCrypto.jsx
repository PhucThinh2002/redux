import React from 'react';
import { List, Button, Avatar, Typography } from 'antd';

const { Title } = Typography;

const AllCrypto = ({ cryptos, onAddToFavorite, favorites }) => {
  const handleAddToFavorite = (crypto) => {
    onAddToFavorite({ type: 'ADD_TO_FAVORITE', payload: crypto });
  };

  return (
    <>
      <Title level={3}>All Cryptocurrencies</Title>
      <List
        itemLayout="horizontal"
        dataSource={cryptos}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={`USD ${item.current_price}`}
            />
            <Button
              type="primary"
              onClick={() => handleAddToFavorite(item)}
              disabled={favorites.some((fav) => fav.id === item.id)}
            >
              Add to Favorites
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default AllCrypto;