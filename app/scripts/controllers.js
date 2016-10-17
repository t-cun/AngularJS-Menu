'use strict';

angular.module('confusionApp')
.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
  $scope.tab = 1;
  $scope.orderText = '';
  $scope.showDetails = false;
  $scope.showMenu = false;
  $scope.message = "Loading...";
  menuFactory.getDishes().query(
    function(response) {
      $scope.dishes = response;
      $scope.showMenu = true;
    },
    function(response) {
      $scope.message = "Error: " + response.status + " " + response.statusText;
    }
  );

  $scope.select = function(setTab) {
    $scope.tab = setTab;

    if(setTab === 2) {
      $scope.orderText = "appetizer";
    } else if (setTab === 3) {
      $scope.orderText = "mains";
    } else if (setTab === 4) {
      $scope.orderText = "dessert";
    } else {
      $scope.orderText = "";
    }
  };

  $scope.isSelected = function(tab) {
    return $scope.tab === tab;
  };
  $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
  };
}])

.controller('ContactController', ['$scope', function($scope) {
  $scope.feedback = { mychannel:"", firstName:"",
  lastName:"", agree:false, email:""};

  var channels = [{value:"tel", label:"Tel."},
  {value:"Email",label:"Email"}];

  $scope.channels = channels;
  $scope.invalidChannelSelection = false;

}])

.controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {
  $scope.sendFeedback = function() {
    if ($scope.feedback.agree && ($scope.feedback.mychannel === "")&& !$scope.feedback.mychannel) {
      $scope.invalidChannelSelection = true;
    } else {
      // Submission action
      feedbackFactory.putFeedback().add($scope.feedback);
      $scope.invalidChannelSelection = false;
      $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
      $scope.feedback.mychannel="";
      $scope.feedbackForm.$setPristine();
    }
  };
}])

.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
  $scope.showDish = false;
  $scope.message="Loading...";
  $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id, 10)})
    .$promise.then(
      function(response) {
        $scope.dish = response;
        $scope.showDish = true;
      },
      function(response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      }
    );
}])

.controller('CommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {

  $scope.comment = { rating:5, comment:"", author:"", date: new Date()};

  $scope.addComment = function(comment) {
    $scope.$parent.dish.comments.push(comment);
    menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
  };

  $scope.postComment = function() {
    $scope.addComment($scope.comment);
    $scope.comment = { rating:5, comment:"", author:"", date: new Date()};
    $scope.commentForm.$setPristine();
  };
}])

.controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {
  $scope.showDish = false;
  $scope.showPromo = false;
  $scope.showLeader = false;
  $scope.message = "Loading...";
  $scope.promoDish = menuFactory.getDishes().get({id:0})
    .$promise.then(
      function(response) {
        $scope.promoDish = response;
        $scope.showDish = true;
      },
      function(response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      }
    );

  $scope.promo = menuFactory.getPromotion().get({id:0})
    .$promise.then(
      function(response) {
        $scope.promo = response;
        $scope.showPromo = true;
      },
      function(response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      }
    );

  $scope.promoLeader = corporateFactory.getLeaders().get({id:3})
    .$promise.then(
      function(response) {
        $scope.promoLeader = response;
        $scope.showLeader = true;
      },
      function(response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      }
    );
}])

.controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {
  $scope.showLeaders = false;
  corporateFactory.getLeaders().query(
    function(response) {
      $scope.leaders = response;
      $scope.showLeaders = true;
    },
    function(response) {
      $scope.message = "Error: " + response.status + " " + response.statusText;
    }
  );
}])
;
