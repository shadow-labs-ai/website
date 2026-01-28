import { post as technicalSalesPost } from './blogs/product-too-technical-slow-sales-cycle';
import { post as salesContextPost } from './blogs/ai-sales-tailor-pitch-customer-context';
import { post as smartConversationsPost } from './blogs/how-to-have-smarter-conversations';

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
  technicalSalesPost,
  salesContextPost,
  smartConversationsPost
];
