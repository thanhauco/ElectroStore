export interface Component {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  manufacturer: string;
  imageUrl: string;
  stock: number;
  rating: number;
  specs: Record<string, string | number>;
  tags: string[];
}

export interface CartItem {
  component: Component;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  description: string;
}