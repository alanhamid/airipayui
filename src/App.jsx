import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { theme } from './theme/theme';
import HeroSection from './components/HeroSection';
import Button from './components/Button';
import { Heading, Paragraph } from './components/Typography';
import { Container } from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroSection />
      <Container>
        <Heading>Welcome to AIRI PAY</Heading>
        <Paragraph>Frictionless, AI-driven, cross-currency payment routing for the GCC.</Paragraph>
        <Button>Get Started</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
