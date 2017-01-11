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
      notes: '95%'
    }, {
      name: 'CSS3',
      img: 'badge-css-3-512.png',
      notes: '93%'
    }, {
      name: 'Sass/SCSS',
      img: 'sass-logo.svg',
      notes: '43%'
    }, {
      name: 'JavaScript',
      img: 'Unofficial_JavaScript_logo.png',
      notes: '56%'
    }, {
      name: 'node.js',
      img: 'nodejs-new-pantone-black.png',
      notes: '12%'
    }, {
      name: 'PHP',
      img: 'PHP-logo.svg.png',
      notes: '10%'
    }, {
      name: 'Angular.js',
      img: 'angular-js.png',
      notes: '70%'
    }, {
      name: 'git',
      img: 'Git-Icon-1788C.png',
      notes: '60%'
    }, {
      name: 'Adobe Photoshop',
      img: 'Adobe_Photoshop_CS5_icon.png',
      notes: '16%'
    }, {
      name: 'Adobe Illistrator',
      img: 'Adobe_Illustrator_CS5_icon.png',
      notes: '23%'
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

ewdApp.controller('navCtrl', ['$scope', function($scope){

  $scope.navModel = false
  $scope.toggleNav = function(){
    if($scope.navModel == false) {
      $scope.navModel = true
    }else {
      $scope.navModel = false
    }
  }

}]);

/*-- TO DO

add the simple tools to projects page

Add some social media/ way to contact me on home page

*/
