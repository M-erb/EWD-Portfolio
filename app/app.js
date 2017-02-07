var ewdApp = angular.module('ewdApp', ['ui.router', 'ngAnimate']);

//have a "pop up" happen if a page is being viewed for a long time

ewdApp.run(['$rootScope', '$location', '$stateParams', '$anchorScroll', function($rootScope, $location, $stateParams, $anchorScroll){

  $rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
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

  $scope.navItems = [
    {
      label: 'Home',
      url: '/'
    }, {
      label: 'My Work',
      url: '/my-work'
    }, {
      label: 'Playground',
      url: '/playground'
    }, {
      label: 'Say Hello',
      url: '/say-hello'
    }
  ]

}]);

/*-- TO DO

add the simple tools to projects page

Add some social media/ way to contact me on home page

*/
