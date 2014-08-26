'use strict';

// (function(){
  /**
   * @ngdoc function
   * @name todoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the todoApp
   */
  angular.module('todoApp')
    .controller('mainCtrl', function ($scope) {
      $scope.todos = [
        'Create angular code',
        'Think about tacos',
        'Get more of my points back from person who stole it all',
        'Figure out why the Black Eyed Peas never went completely hip-hop'
      ];

      $scope.addTodo = function() {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };

      $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
      };
    });
// })();
