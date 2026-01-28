import { post as technicalSalesPost } from './blogs/product-too-technical-slow-sales-cycle';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  technicalSalesPost
];
