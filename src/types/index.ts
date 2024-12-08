export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  owner: User;
  available: boolean;
  location: string;
  distance?: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  rating: number;
}

export interface Loan {
  id: string;
  item: Item;
  borrower: User;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: User;
  itemId: string;
  createdAt: Date;
}