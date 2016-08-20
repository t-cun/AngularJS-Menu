'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

          $scope.tab = 1;
          $scope.filtText = '';
          $scope.showDetails = false;
          $scope.dishes = menuFactory.getDishes();


          $scope.select = function(setTab) {
            $scope.tab = setTab;

            if(setTab === 2) {
              $scope.filtText = "appetizer";
            } else if (setTab === 3) {
              $scope.filtText = "mains";
            } else if (setTab === 4) {
              $scope.filtText = "dessert";
            } else {
              $scope.filtText = "";
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

        .controller('FeedbackController', ['$scope', function($scope) {
          $scope.sendFeedback = function() {
            if ($scope.feedback.agree && ($scope.feedback.mychannel === "")&& !$scope.feedback.mychannel) {
              $scope.invalidChannelSelection = true;
            } else {
                    // Submission action
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
            }
          };
        }])

        .controller('dishDetailController', ['$scope', 'menuFactory', function($scope, menuFactory) {
          $scope.dish = menuFactory.getDish(3);
        }])

        .controller('CommentController', ['$scope', function($scope) {

          $scope.comment = { rating:5, comment:"", author:"", date: new Date()};

          $scope.addComment = function(comment) {
              $scope.$parent.dish.comments.push(comment);
          };

          $scope.postComment = function() {
              $scope.addComment($scope.comment);
              $scope.comment = { rating:5, comment:"", author:"", date: new Date()};
              $scope.commentForm.$setPristine();
            };
        }]);
