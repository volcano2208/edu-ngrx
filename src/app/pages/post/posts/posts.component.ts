import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;

  sortValue: 'asc' | 'desc' = 'asc';

  constructor(private store: Store<AppState>) {
    this.posts$ = store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

  setSorting(order: 'asc' | 'desc') {
    this.store.dispatch(sortingPosts({ sort: order }));
  }
}
