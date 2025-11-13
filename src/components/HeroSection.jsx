import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroBg from '../assets/airiPayLogo5.png';

const HeroWrapper = styled.section`
  background: url(${heroBg}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0 0 20px ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin: 1rem 0;
`;

const Link = styled(motion.a)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }
`;

export default function HeroSection() {
  return (
    <HeroWrapper>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        AIRI PAY
      </Title>
      <Subtitle initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
        A Rail Agnostic Agentic AI Payment Router UX
      </Subtitle>
      <Link href="https://airipay.ai" target="_blank" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}>
        airipay.ai
      </Link>
    </HeroWrapper>
  );
}
