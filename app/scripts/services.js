'use strict';

angular.module('confusionApp')
.constant("baseURL", "https://coursera-angular-js.firebaseio.com/")
.constant('imgURL', 'https://firebasestorage.googleapis.com/v0/b/coursera-angular-js.appspot.com/o/')
.constant('imgTail', '?alt=media')
.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

  this.getDishes = function() {
    return $resource(baseURL+"dishes/:id" + ".json", null, {'update':{method:'PUT'}});
  };

  this.getPromotion = function() {
    return $resource(baseURL+"promotions/:id" + ".json", null, {'update':{method:'PUT'}});
  };
}])

.factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
  var leadership = $resource(baseURL+"leadership/:id" + ".json", null, {'update':{method:'PUT'}});

  return {
    getLeaders: function() {
      return leadership;
    }
  };
}])

.factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
  var feedback = $resource(baseURL+"feedback/:id" + ".json", null, {'add':{method:'POST'}});

  return {
    putFeedback: function() {
      return feedback;
    }
  };
}]);
