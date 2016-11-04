/**
 * Created by voland on 4/2/16.
 */
import {Component, Inject} from 'ngts-annotations';
import './comment-list.scss';
import {IComment} from "../../interfaces";
import {filterByTagsPipe} from "../../pipes/filterByTags";
import {CommentsService} from '../../services/comments.service';

@Component({
  name: 'comments',
  template: `
        <div class="container-fluid">
            <div class="discussion-timeline">
                <tags-input ng-model="$ctrl.tagFilter">
                    <auto-complete source="$ctrl.tags"></auto-complete>
                </tags-input>
                <comment ng-repeat="comment in $ctrl.comments | filterByTags:$ctrl.tagFilter" comment="comment" tags="$ctrl.tags" on-delete="$ctrl.deleteComment(comment)"></comment>
                <comment comment="$ctrl.emptyComment" on-add="$ctrl.addComment()" tags="$ctrl.tags"></comment>
            </div>
        </div>`
})
export class CommentsComponent {
  comments: IComment[];
  emptyComment: IComment;
  tags: string[];
  tagFilter: any[];

  constructor(@Inject(CommentsService) private commentsService: CommentsService) {
    this.emptyComment = {};
    this.tagFilter = [];
    commentsService.getComments().then((comments) => {
      this.comments = comments;
      this.tags = this.comments
        .map((el) => el.tags)
        .reduce((prev, curr) => [...prev, ...curr])
        .filter((elem, pos, arr) => arr.indexOf(elem) == pos);
    });
  }

  private getCommentId() {
    let arr = this.comments.map((el) => el.id);
    return Math.max(...arr) + 1;
  }

  addComment() {
    this.emptyComment.id = this.getCommentId();
    this.comments.push(this.emptyComment);
    this.emptyComment = {};
  }

  deleteComment(comment: IComment) {
    let index = this.comments.indexOf(comment);
    this.comments.splice(index, 1);
  }
}