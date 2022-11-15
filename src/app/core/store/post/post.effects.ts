import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { PostService } from "../../services/post.service";
import * as postActions from './post.action';
@Injectable({
  providedIn: 'root'
})
export class PostEffects {
  constructor(private action$: Actions, private postService: PostService) { }

  loadPosts$ = createEffect(() => this.action$.pipe(
    ofType(postActions.getPosts),
    mergeMap(() => this.postService.getPosts()),
    map(posts => postActions.getPostsSuccess({ posts })),
    catchError(error => of(postActions.getPostsFailed({ error })))
  ))
}
