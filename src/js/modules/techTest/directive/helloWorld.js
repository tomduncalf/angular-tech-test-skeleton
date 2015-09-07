var templateUrl = require('./template/helloWorld.tpl.html');

angular.module('TechTest')
.directive('helloWorld', () => {
  return {
    templateUrl: templateUrl
  }
});
