import React, { useContext } from 'react';
import { CartContext } from '../contexts/CardContext';
import { Card } from '../components/ui/Card';
import { Image } from '../components/ui/Image';
import { Button } from '../components/ui/Button';
import { Price } from '../components/ui/Price';
import { Title } from '../components/ui/Title';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <Card onClick={onClick}>
      <Image src={product.image} alt={product.name} aria-label={product.name} />
      <Title>{product.name}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
