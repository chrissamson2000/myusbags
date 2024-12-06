import React from 'react';
import { Typography, Container } from '@mui/material';

function AboutPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        About Us
      </Typography>
      <Typography paragraph>
        We are a couple passionate about fashion, offering premium handbags
        that blend modern styles with timeless elegance. Our mission is to
        provide high-quality bags for people who love both form and function.
      </Typography>
    </Container>
  );
}

export default AboutPage;
