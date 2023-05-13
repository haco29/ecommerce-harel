export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
}
