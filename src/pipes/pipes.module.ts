import angular = require('angular');
import {filterByTagsPipe} from './filterByTags';

export default angular.module('app.pipes', ['app.services'])
  .filter('filterByTags', filterByTagsPipe);
