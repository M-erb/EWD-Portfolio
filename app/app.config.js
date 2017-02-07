ewdApp.config(['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $uiViewScrollProvider, $locationProvider){

  $uiViewScrollProvider.useAnchorScroll();
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'mainCtrl'
    });
  $stateProvider
    .state('myWork', {
      url: '/my-work',
      templateUrl: 'views/my-work.html',
      controller: 'workCtrl'
    });
  $stateProvider
    .state('playground', {
      url: '/playground',
      templateUrl: 'views/playground.html',
      controller: 'playCtrl'
    });
  $stateProvider
    .state('sayHello', {
      url: '/say-hello',
      templateUrl: 'views/contact.html',
      controller: 'mainCtrl'
    });

    $urlRouterProvider.otherwise('/');

}]);
