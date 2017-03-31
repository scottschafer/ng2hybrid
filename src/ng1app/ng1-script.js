(function () {
  'use strict';

angular.module('ng1app', [])
    .controller('Ng1Ctrl', ['$scope',
      function ($scope) {
          $scope.angular1Msg = 'Greetings from Angular 1';
      }]);

})();
