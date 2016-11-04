/**
 * Created by vlad on 5/29/16.
 */
import {autoDeclare} from 'ngts-annotations';
import {CommentComponent} from './comment/comment.component';
import {CommentsComponent} from './comment-list/comments.component';
import {AppComponent} from './app.component';

export default autoDeclare('app.components', [], [
  AppComponent,
  CommentComponent,
  CommentsComponent
])