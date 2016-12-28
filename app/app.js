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
  $scope.toggleTool = function(i) {
    if($scope.techList[i].display == false){
      $scope.techList[i].display = true
    }else {
      $scope.techList[i].display = false
    }
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

  $scope.techList = [
    {
      name: 'HTML5',
      img: 'HTML5_Badge_256.png',
      display: false,
      notes: '95%'
    }, {
      name: 'CSS3',
      img: 'badge-css-3-512.png',
      display: false,
      notes: '95%'
    }, {
      name: 'JavaScript',
      img: 'Unofficial_JavaScript_logo.png',
      display: false,
      notes: '63%'
    }, {
      name: 'Angular.js',
      img: 'angular-js.png',
      display: false,
      notes: '70%'
    }
  ]

  $scope.playGroundList = [
    {
      name: 'codepen.io',
      img: 'Codepen-Logo.png',
      link: 'http://codepen.io/merb/',
      notes: 'check out my pens, I am always adding a new experiment.'
    }, {
      name: 'github.com',
      img: 'github-logojpg.jpg',
      link: 'https://github.com/M-erb',
      notes: 'see my activity on github.'
    }
  ]

}]);

/*-- TO DO

add github to projects page

Add work to projects page

add the simple tools to projects page

Add some social media/ way to contact me on home page

*/
