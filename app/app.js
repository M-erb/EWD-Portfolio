var ewdApp = angular.module('ewdApp', ['ui.router', 'ngAnimate']);

//have a "pop up" happen if a page is being viewed for a long time

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
    .state('playground', {
      url: '/playground',
      templateUrl: 'views/playground.html',
      controller: 'mainCtrl'
    });
  $stateProvider
    .state('sayHello', {
      url: '/say-hello',
      templateUrl: 'views/contact.html',
      controller: 'mainCtrl'
    });

    $urlRouterProvider.otherwise('/');

}]);

ewdApp.run(['$rootScope', '$location', '$stateParams', '$anchorScroll', function($rootScope, $location, $stateParams, $anchorScroll){

  $rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}]);

ewdApp.controller('mainCtrl', ['$scope', function($scope){

  $scope.toggleTools = function(toolBox) {
    var toolInfoBox = document.getElementById(toolBox);
    $(toolInfoBox).toggleClass('me_show');
  };

  $scope.myWorks = [
    {
      title: 'tiedwithstrings.com',
      img: 'content/img/tiedwithstrings.png',
      url: 'http://tiedwithstrings.com',
      info: 'Still in process, e-commerce site'
    }, {
      title: 'hawthornconsultingengineers.com',
      img: 'content/img/hawthorn.png',
      url: 'http://hawthornconsultingengineers.com/',
      info: 'Portfolio site for company'
    }, {
      title: 'mrmroofing.com',
      img: 'content/img/mrmroofing.png',
      url: 'http://mrmroofingllc.com/',
      info: 'One page site for company'
    }
  ];

}]);

/*-- TO DO

add github to projects page

Add work to projects page

add the simple tools to projects page

Add some social media/ way to contact me on home page

*/
