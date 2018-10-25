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
      title: 'Fast Chat Scripts',
      tagLine: 'Work project',
      img: 'content/img/fastchatscripts.erbwebdev.com.png',
      url: 'https://fastchatscripts.erbwebdev.com/',
      info: 'Saw a need when working as a Customer Support Representetive at Infusionsoft for myself and co-workers. That was to reply back to customers fast. The goal of this project was to speed up common replys and information and yet stay away from our reps sounding like robots to customers. So created common friendly "good byes" for example. Also common explainations such as how to reset ones password. All in all it was a success and fun to collaborate with co-workers and managers with how best to impliment the project.',
      features: ['angular.js', 'search bar', 'category search options', 'copy to clipboard buttons', 'rounter UI', 'feed back form']
    }, {
      title: 'Key Codes',
      tagLine: 'Fun personal project',
      img: 'content/img/keycode.png',
      url: 'http://keycode.erbwebdev.com/',
      info: 'I saw a few other examples of this and thought it a fun experiment. It reads keyboard events and dynamically displays the keyCode and name of the key from browser\'s DOM event object.',
      features: ['vanilla JS', 'keyboard event handling']
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

  $scope.techList = [
    {
      name: 'HTML5',
      img: 'HTML5_Badge_256.png',
      notes: ''
    }, {
      name: 'CSS3',
      img: 'badge-css-3-512.png',
      notes: ''
    }, {
      name: 'Sass/SCSS',
      img: 'sass-logo.svg',
      notes: ''
    }, {
      name: 'JavaScript',
      img: 'Unofficial_JavaScript_logo.png',
      notes: ''
    }, {
      name: 'Vue.js',
      img: 'vuejs-logo.png',
      notes: ''
    }, {
      name: 'Angular.js',
      img: 'angular-js.png',
      notes: ''
    }, {
      name: 'webpack',
      img: 'webpack.svg',
      notes: ''
    }, {
      name: 'Typescript',
      img: 'typescript.png',
      notes: ''
    }, {
      name: 'ESLint',
      img: 'eslint.svg',
      notes: ''
    }, {
      name: 'node.js',
      img: 'nodejs-new-pantone-black.png',
      notes: ''
    }, {
      name: 'git',
      img: 'Git-Icon-1788C.png',
      notes: ''
    }, {
      name: 'gulp',
      img: 'gulp.png',
      notes: ''
    }, {
      name: 'Adobe Photoshop',
      img: 'Adobe_Photoshop_CS5_icon.png',
      notes: ''
    }, {
      name: 'Adobe Illustrator',
      img: 'Adobe_Illustrator_CS5_icon.png',
      notes: ''
    }
  ]

}]);
