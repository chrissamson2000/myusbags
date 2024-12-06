import React from 'react';
import { Button, Typography, Grid2 } from '@mui/material';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Store
      </Typography>
      <Grid2 container spacing={2} justifyContent="center">
        <Grid2 item xs={12} sm={6} md={4}>
          <Card
            hoverable
            cover={<img alt="product" src="product-image.jpg" />}
          >
            <Card.Meta title="Stylish Handbag" description="Perfect for any occasion" />
            <Link to="/shop">
              <Button type="primary" style={{ marginTop: '10px' }} block>
                View Product
              </Button>
            </Link>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default HomePage;
