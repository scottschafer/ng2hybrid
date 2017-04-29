(function () {
  'use strict';

var app = angular.module('ng1app', ['ui.router']); 

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



app.config(function($stateProvider, $urlRouterProvider) {

  //$urlRouterProvider.when('/home', '/home/index');
/*
// url '/home', but you'll never see this state directly
stateProvider
  .state('parent', {
    url: '/home',
    abstract: true,
    template: '<ui-view/>'
  })
  .state('parent.index', {url: ''})
  .state('hello', {
    url: '/home/hello',
    template: '<h3>hello world!</h3>'
  })
  ;//.state()

  $stateProvider
    .state('parent', {url: '/home', abstract: true, template: 'Hey <ui-view/>'} )
    // ALSO url '/home', overriding its parent's activation
    .state('parent.index', {url: '/index'} );
*/

  var home = {
    name: 'home',
    url: '',
    controller: 'Ng1Ctrl',
    template: 
      '<a ui-sref="hello" ui-sref-active="active">Hello</a>&nbsp;' +
      '<a ui-sref="about" ui-sref-active="active">About</a>' +
      '<ui-view></ui-view>'
  }

  var helloState = {
    name: 'hello',
    url: '/home/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/home/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(home);
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

})();
