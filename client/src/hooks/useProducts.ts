import { useQuery } from 'react-query';
import { Product } from '../types/Product';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('http://localhost:3004/products');

  if (!response.ok) {
    throw new Error('Error fetching products');
  }

  const products: Product[] = await response.json();
  return products;
};

const useProducts = () => {
  return useQuery<Product[], Error>('products', fetchProducts);
};

export default useProducts;
