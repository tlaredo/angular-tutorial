angular.module("todoListApp", [])

.service('dataService', function($http) {
  
  this.helloConsole = function() {
    console.log('This is the hello console service!');
  };
  
  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)
  };
  
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " has been deleted.")
    //other logic
  };
  
  this.saveTodo = function(todo) {
    console.log("The " + todo.name + " is saved.")
    //other logic...
  }
  
});



/*
.controller('coolCtrl', function($scope) {
  $scope.whoAmI = function() {
    console.log("Hello there! This is the coolCtrl function!");
  };
  
  $scope.helloWorld = function() {
    console.log("This is not in main!");
  }
})

.controller('imASibling', function($scope) {
  $scope.foobar = 1234;
});
*/
    