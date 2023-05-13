import React from 'react';
import useProduct from '../hooks/useProduct';
import { Heading } from '../components/ui/Heading';
import { Price } from '../components/ui/Price';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

interface ProductPageProps {
  productId: number;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
  const { data: product, isLoading } = useProduct(productId);

  if (isLoading) {
    return <StyledHeading>Loading...</StyledHeading>;
  }

  if (!product) {
    return <StyledHeading>Product not found</StyledHeading>;
  }

  return (
    <ProductContainer>
      <ProductImage
        src={product.image}
        alt={product.name}
        aria-label={product.name}
      />
      <ProductInfo>
        <StyledHeading>{product.name}</StyledHeading>
        <p>{product.description}</p>
        <Price>${product.price.toFixed(2)}</Price>
        <p>Rating: {product.rating}/5</p>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductPage;
