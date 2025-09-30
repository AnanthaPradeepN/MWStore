 type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';
 type Category = 'Shirts' | 'Trousers' | 'Shoes' | 'Accessories';

 interface Product {
  id: string;
  title: string;
  price: number;
  size: Size;
  category: Category;
//   stock: number;
}

export type { Product, Size, Category };
