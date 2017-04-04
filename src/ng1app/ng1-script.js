(function () {
  'use strict';

var app = angular.module('ng1app', []); 

app.
controller('Ng1Ctrl',
  ['$scope', function ($scope) {
    $scope.angular1Msg = "I'm an Angular1 controller";
  }])

.directive('ng1Directive', function() {
  return {
    template: '<p>I am an angular1 directive, declared in ng1-script.js</p>'
  };
});  

})();
