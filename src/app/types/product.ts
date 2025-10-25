export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: Rating;
};

export type Rating = {
  rate: number;
  count: number;
}
