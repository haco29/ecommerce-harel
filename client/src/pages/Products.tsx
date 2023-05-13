import React, { useState } from 'react';
import styled from 'styled-components';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { Heading } from '../components/ui/Heading';
import { Modal } from '../components/ui/Modal';
import ProductPage from './ProductPage';

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Products: React.FC = () => {
  const { data: products, isLoading } = useProducts();
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  if (isLoading) {
    return <StyledHeading>Loading...</StyledHeading>;
  }

  if (!products) {
    return <StyledHeading>No products found</StyledHeading>;
  }

  const closeModal = () => {
    setSelectedProductId(null);
  };

  return (
    <>
      <Heading mb="2rem">Products</Heading>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProductId(product.id)}
          />
        ))}
      </ProductsContainer>
      <Modal isOpen={!!selectedProductId} onClose={closeModal}>
        {selectedProductId && <ProductPage productId={selectedProductId} />}
      </Modal>
    </>
  );
};

export default Products;
