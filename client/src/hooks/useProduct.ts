import { useQuery } from 'react-query';
import { Product } from '../types/Product';

const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`http://localhost:3004/products/${id}`);

  if (!response.ok) {
    throw new Error('Error fetching product');
  }

  const product: Product = await response.json();
  return product;
};

const useProduct = (id: number) => {
  return useQuery<Product, Error>(['product', id], () => fetchProduct(id), {
    enabled: !!id,
  });
};

export default useProduct;
