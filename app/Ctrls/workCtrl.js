ewdApp.controller('workCtrl', ['$scope', function($scope){

  $scope.navModel = false

  $scope.myWorks = [
    {
      title: 'Key Codes',
      tagLine: 'Fun personal project',
      img: 'content/img/keycode.png',
      url: 'http://keycode.erbwebdev.com/',
      info: 'I saw a few other examples of this and thought it a fun experiment. It reads keyboard events and dynamically displays the keyCode and name of the key from browser\'s DOM event object.',
      features: ['vanilla JS', 'keyboard event handling']
    }, {
      title: 'Mrmroofing',
      tagLine: 'One page site for client',
      img: 'content/img/mrmroofing.png',
      url: 'http://mrmroofingllc.com/',
      info: 'One page site for a client. Using just classic HTML CSS and Javascript, nothing too fancy',
      features: ['Smooth scroll to page sections', 'Client Work', 'Mobile Responsive design']
    }, {
      title: 'tied with strings',
      tagLine: 'E-commerce site',
      img: 'content/img/tiedwithstrings.png',
      url: 'http://tiedwithstrings.erbwebdev.com',
      info: 'A personal project and first bigger project with angular.js. Learned a lot about javascript and angular.js. Static site with data is powered by static JSON file.',
      features: ['Angular.js', 'Search+filters', 'Add to shopping bag', 'Purchase using Infusionsoft']
    }, {
      title: 'Erb Web Dev',
      tagLine: 'One page site for myself',
      img: 'content/img/ewd.png',
      url: 'http://erbwebdev.com/',
      info: 'Hero images created by yours truly. A website to house my work.',
      features: ['angular.js', 'Page changing animations', 'Mobile Responsive design']
    }
  ];

}]);
