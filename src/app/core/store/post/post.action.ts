import { ActionType, createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";
// Define action
export const GET_POSTS = '@Post/GetAll';
export const GET_POSTS_SUCCESS = '@Post/GetAllSuccess';
export const GET_POSTS_FAILED = '@Post/GetAllFailed';
export const GET_POST = '@Post/Get';
export const GET_POST_SUCCESS = '@Post/GetSuccess';
export const GET_POST_FAILED = '@Post/GetFailed';
export const CREATE_POST = '@Post/Create';
export const UPDATE_POST = '@Post/Update';
export const SORTING_POSTS = '@Post/Sorting';
// Posts Action
export const getPosts = createAction(GET_POSTS);
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS, props<{ posts: Post[] }>());
export const getPostsFailed = createAction(GET_POSTS_FAILED, props<{ error?: string }>());
export const sortingPosts = createAction(SORTING_POSTS, props<{ sort: 'asc' | 'desc' | null }>());
// Post Action
export const getPostById = createAction(GET_POST, props<{ id: string }>());
export const getPostByIdSuccess = createAction(GET_POST_SUCCESS, props<{ post: Post }>());
export const getPostByIdFailed = createAction(GET_POST_FAILED, props<{ error?: string }>());
export const createPost = createAction(CREATE_POST, props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST, props<{ error?: string }>());

export type PostActions =
  | ActionType<typeof getPosts>
  | ActionType<typeof getPostsSuccess>
  | ActionType<typeof getPostsFailed>
  | ActionType<typeof getPostById>
  | ActionType<typeof getPostByIdSuccess>
  | ActionType<typeof getPostByIdFailed>
  | ActionType<typeof createPost>
  | ActionType<typeof updatePost>
  | ActionType<typeof sortingPosts>;
