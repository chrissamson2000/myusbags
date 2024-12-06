import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Menu } from 'antd'; // Menu is imported as a whole, no need for MenuItem import separately
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MyUSBags
        </Typography>
        <Menu mode="horizontal">
          {/* Use Menu.Item instead of MenuItem */}
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/shop">Shop</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/cart">Cart</Link>
          </Menu.Item>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
