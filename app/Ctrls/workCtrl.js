ewdApp.controller('workCtrl', ['$scope', function($scope){

  $scope.navModel = false

  $scope.myWorks = [
    {
      title: 'tied with strings',
      tagLine: 'E-commerce and main site for compnay',
      img: 'content/img/tiedwithstrings.png',
      url: 'http://tiedwithstrings.com',
      info: 'Still in process, e-commerce site',
      features: ['Angular.js', 'Search+filters', 'Add to shopping bag', 'Purchase using Infusionsoft']
    }, {
      title: 'Unturned Ids',
      tagLine: 'Search and copy ids of game assets',
      img: 'content/img/unturned-ids.png',
      url: 'http://unturned.erbwebdev.com/',
      info: 'Search and copy ids of game assets for a game called Unturned. Super simple and fun. This site is for those that want to know the game id numbers for spawning in items',
      features: ['Angular.js', 'infinite scroll', 'Search+filters', 'Build a custom list']
    }, {
      title: 'Mrmroofing',
      tagLine: 'One page site for company',
      img: 'content/img/mrmroofing.png',
      url: 'http://mrmroofingllc.com/',
      info: 'One page site for company. Using just classic HTML CSS and Javascript, nothing too fancy',
      features: ['Smooth scroll to page sections', 'Client Work']
    }
  ];

}]);
