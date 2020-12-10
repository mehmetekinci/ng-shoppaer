import { __String } from 'typescript';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  url: string;
}

export class ProductService {
  products: IProduct[] = [
    {
      id: 0,
      name: 'Adidas Blue Hawk',
      price: 399,
      url: 'https://www.pngarts.com/files/5/Adidas-Shoes-PNG-Image.png',
    },
    {
      id: 1,
      name: 'Balenciaga Black',
      price: 199,
      url: 'https://www.pngarts.com/files/8/Balenciaga-Logo-Free-PNG-Image.png',
    },
    {
      id: 2,
      name: 'Adidas Black Hawk',
      price: 249,
      url: 'https://www.pngarts.com/files/5/Adidas-Shoes-PNG-Image.png',
    },
  ];

  createProduct(name: string, price: number, url: string) {
    this.products.push({ name, price, url, id: this.products.length });
  }
  getProducts(): IProduct[] {
    return this.products;
  }
  getProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
