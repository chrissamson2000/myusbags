import React from 'react';
import { Container, Typography } from '@mui/material';
import { Button } from 'antd';  // Ant Design button
import Navigation from './Navigation'; // Navigation Component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router

import HomePage from './Home'; // Import Home
import AboutPage from './About'; // Import About
import CartPage from './Cart'; // Import Cart
import ShopPage from './Shop'; // Import Shop

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <div>
          <title>Testing out this function.</title>
          <h1>Hello Chris</h1>
        </div>

        <Container>
          <Typography variant="h3" gutterBottom align="center">
            Welcome to My E-Commerce Store
          </Typography>
          <Typography variant="h6" paragraph align="center">
            Explore the latest fashion and accessories.
          </Typography>
          <Button type="primary" size="large" block>
            Start Shopping
          </Button>
        </Container>
      </div>
    </Router>
  );
}

export default App;
