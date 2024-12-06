import React from 'react';
import { Card, Button, Typography } from 'antd';
import { Grid } from '@mui/material';

function CartPage() {
  return (
    <Grid container spacing={3} justifyContent="center" style={{ padding: '20px' }}>
      <Grid item xs={12} sm={6}>
        <Card title="Cart" bordered={false} style={{ width: '100%' }}>
          <Typography variant="h6">Product Name: Stylish Handbag</Typography>
          <Typography variant="body1">Quantity: 1</Typography>
          <Typography variant="h5" gutterBottom>
            Total: $129.99
          </Typography>
          <Button type="primary" block>
            Proceed to Checkout
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CartPage;
