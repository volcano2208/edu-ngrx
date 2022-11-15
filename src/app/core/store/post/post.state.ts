import { Post } from '../../models/post.model';

export interface PostState {
  posts: Post[];
  currentPost: Post | null;
  status: 'idle' | 'loading' | 'error';
  error?: string;
  sort: 'asc' | 'desc' | null;
}
