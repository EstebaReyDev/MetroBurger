
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burger' | 'sides' | 'drinks';
  tags?: string[];
}

export interface UserReview {
  id: string;
  user: string;
  handle: string;
  text: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
