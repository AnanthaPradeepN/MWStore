type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type Category = 'Shirts' | 'Trousers' | 'Shoes' | 'Accessories';
interface Product {
    id: string;
    title: string;
    price: number;
    size: Size;
    category: Category;
}
export type { Product, Size, Category };
//# sourceMappingURL=Product.d.ts.map