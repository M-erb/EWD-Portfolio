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

  $scope.techList = [
    {
      name: 'HTML5',
      img: 'HTML5_Badge_256.png',
      notes: '98%'
    }, {
      name: 'CSS3',
      img: 'badge-css-3-512.png',
      notes: '98%'
    }, {
      name: 'Sass/SCSS',
      img: 'sass-logo.svg',
      notes: '80%'
    }, {
      name: 'JavaScript',
      img: 'Unofficial_JavaScript_logo.png',
      notes: '80%'
    }, {
      name: 'Vue.js',
      img: 'vuejs-logo.png',
      notes: '85%'
    }, {
      name: 'Angular.js',
      img: 'angular-js.png',
      notes: '80%'
    }, {
      name: 'node.js',
      img: 'nodejs-new-pantone-black.png',
      notes: '12%'
    }, {
      name: 'PHP',
      img: 'PHP-logo.svg.png',
      notes: '10%'
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
      notes: '33%'
    }
  ]

}]);
