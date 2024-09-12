import React from 'react';
import { List, Button, Avatar, Typography } from 'antd';

const { Title } = Typography;

const YourFavorite = ({ favorites, onRemoveFavorite }) => {
  const handleRemoveFavorite = (crypto) => {
    onRemoveFavorite({ type: 'REMOVE_FAVORITE', payload: crypto });
  };

  return (
    <>
      <Title level={3}>Your Favorites</Title>
      <List
        itemLayout="horizontal"
        dataSource={favorites}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={`USD ${item.current_price}`}
            />
            <Button type="danger" onClick={() => handleRemoveFavorite(item)}>
              Remove
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default YourFavorite;