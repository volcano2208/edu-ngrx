import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
@NgModule({
  imports: [
    PostRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzIconModule,
    NzEmptyModule,
    NzCardModule,
    NzButtonModule,
    NzAvatarModule,
    NzSelectModule,
  ],
  declarations: [PostsComponent, PostDetailComponent],
  exports: [PostsComponent, PostDetailComponent],
})
export class PostModule {}
