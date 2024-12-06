import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Card } from 'antd';

function ProductDetails() {
  return (
    <Grid container spacing={3} justifyContent="center" style={{ padding: '20px' }}>
      <Grid item xs={12} sm={6}>
        <img src="product-image.jpg" alt="Product" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card
          title="Stylish Handbag"
          bordered={false}
          style={{ width: '100%' }}
        >
          <Typography variant="h5" gutterBottom>
            $129.99
          </Typography>
          <Typography paragraph>
            A beautifully crafted handbag, made from the finest materials. Perfect for any occasion.
          </Typography>
          <Button type="primary" block>
            Add to Cart
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
