'use strict';

angular.module('confusionApp',[])

        .controller('dishDetailController', ['$scope', function($scope) {

          $scope.filtText = '';
          $scope.dish={
            name:'Uthapizza',
            image: 'images/uthapizza.png',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
            comments: [
              {
                rating:5,
                comment:"Imagine all the eatables, living in conFusion!",
                author:"John Lemon",
                date: new Date("2012-10-16T17:57:28.556094Z")
              },
              {
                rating:4,
                comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author:"Paul McVites",
                date: new Date("2014-09-05T17:57:28.556094Z")
              },
              {
                rating:3,
                comment:"Eat it, just eat it!",
                author:"Michael Jaikishan",
                date: new Date("2015-02-13T17:57:28.556094Z")
              },
              {
                rating:4,
                comment:"Ultimate, Reaching for the stars!",
                author:"Ringo Starry",
                date: new Date("2013-12-02T17:57:28.556094Z")
              },
              {
                rating:2,
                comment:"It's your birthday, we're gonna party!",
                author:"25 Cent",
                date: new Date("2011-12-02T17:57:28.556094Z")
              }

            ]
          };
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