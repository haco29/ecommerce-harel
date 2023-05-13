import React from 'react';
import styled from 'styled-components';
import { Heading } from '../components/ui/Heading';

const Container = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 1rem;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Heading textAlign="center" mb="2rem">
        About Us
      </Heading>
      <Paragraph>
        Welcome to our e-commerce store! We are a team of passionate individuals
        dedicated to providing the best products and shopping experience to our
        customers. We handpick our products and ensure they meet the highest
        quality standards. Our customer support is always here to help you with
        any questions or issues you may have. Thank you for choosing us!
      </Paragraph>
    </Container>
  );
};

export default About;
