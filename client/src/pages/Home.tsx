import React from 'react';
import Products from './Products';
import { PageContainer } from '../components/ui/PageContainer';

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Products />
    </PageContainer>
  );
};

export default Home;
