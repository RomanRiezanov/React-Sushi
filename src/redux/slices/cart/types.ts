export interface CartProductState {
  alt: string;
  amount: number;
  compound: string;
  count: number;
  id: number;
  price: number;
  src: string;
  title: string;
  weight: number;
}

export interface CartSliceState {
  totalPrice: number;
  products: CartProductState[];
}
