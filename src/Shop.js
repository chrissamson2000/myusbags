import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

function ShopPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shop Our Collection
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Repeat this block for each product */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            hoverable
            cover={<img alt="product" src="product-image.jpg" />}
          >
            <Card.Meta title="Stylish Handbag" description="$129.99" />
            <Link to="/product-details">
              <Button type="primary" style={{ marginTop: '10px' }} block>
                View Product
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ShopPage;
