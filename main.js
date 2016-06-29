/*import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';*/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
// import { Article } from '../imports/api/dbsource.js';
import { Tasks } from '../imports/api/tasks.js';


angular.module('simple-todos', [
  angularMeteor//,
  // todosList.name
]).controller('TodosListCtrl', ['$scope', '$reactive', function($scope, $reactive) {
  
  'ngInject';
    /*$scope.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];*/

    $reactive(this).attach($scope);
  // $scope.helpers({
 /* this.helpers({
    tasks() {
      console.log(Tasks.find({}).count());console.log(Tasks.find({}).fetch());
      return Tasks.find({});
    },

  });*/
  this.helpers({
    tasks: () => {
      return Tasks.find({});
    }
  });
}]);


