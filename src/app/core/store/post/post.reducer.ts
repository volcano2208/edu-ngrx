import * as PostActions from './post.action';
import { PostState } from './post.state';
import { orderBy } from 'lodash';

const initialState: PostState = {
  posts: [],
  currentPost: null,
  status: 'idle',
  error: '',
  sort: null,
};

export function postReducer(
  state: PostState = initialState,
  action: PostActions.PostActions
): PostState {
  switch (action.type) {
    // Reducer for Posts
    case PostActions.GET_POSTS:
      return { ...state, status: 'loading' };

    case PostActions.GET_POSTS_SUCCESS: {
      let posts = action.posts;
      const sortOrder = state.sort;
      if (sortOrder) {
        posts = orderBy([...posts], [sortOrder]);
      }
      return { ...state, status: 'idle', posts, error: '' };
    }

    case PostActions.GET_POSTS_FAILED:
      return {
        ...state,
        status: 'error',
        currentPost: null,
        error: action.error,
      };

    case PostActions.SORTING_POSTS: {
      let posts = state.posts;
      const sortOrderCurrent = !action.sort
        ? null
        : action.sort === 'asc'
        ? 'asc'
        : 'desc';
      if (sortOrderCurrent) {
        posts = orderBy([...posts], ['id'], [sortOrderCurrent]);
      }
      return { ...state, sort: action.sort, posts };
    }

    // Reducer for Post
    case PostActions.GET_POST:
      return { ...state, status: 'loading' };

    case PostActions.GET_POST_SUCCESS:
      return { ...state, status: 'idle', currentPost: action.post };

    case PostActions.GET_POST_FAILED:
      return {
        ...state,
        status: 'error',
        currentPost: null,
        error: action.error,
      };

    // Default
    default:
      return state;
  }
}
