/**
 * Created by voland on 4/2/16.
 */

// import {PipeTransform, Pipe, Injectable} from 'ngts-annotations';
import {CommentsService} from "../services/comments.service";

export function filterByTagsPipe($q: ng.IQService, $state: CommentsService) {
  console.log(`filter register`);
  return function (comments: any, tags: any) {
    let deferred = $q.defer;
    console.log($state);
    if (!tags.length) return comments;
    function check(comment) {
      let filterArray = tags.map((tag: any) => tag.text);
      let findCount = filterArray
        .map((tag) => comment.tags.indexOf(tag) > -1 ? 1 : 0)
        .reduce((prev, curr) => prev + curr);
      return findCount === filterArray.length;
    }

    return comments.filter(check);
  }
}