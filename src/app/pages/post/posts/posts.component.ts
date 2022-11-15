import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { AppState } from 'src/app/core/store/app.state';
import { getPosts, sortingPosts } from 'src/app/core/store/post/post.action';
import { postsSelector } from 'src/app/core/store/post/post.selector';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnChanges {
  posts$!: Observable<Post[]>;

  sortValue: 'asc' | 'desc' = 'asc';

  constructor(private store: Store<AppState>, private _router: Router) {
    this.posts$ = store.pipe(select(postsSelector));
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

  setSorting(order: 'asc' | 'desc') {
    this.store.dispatch(sortingPosts({ sort: order }));
  }
}
