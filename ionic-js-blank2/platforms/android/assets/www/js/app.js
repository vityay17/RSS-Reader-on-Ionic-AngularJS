// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var App = angular.module('starter', ['ionic']);

App.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        
    });
    
});


App.controller("FeedCtrl", ['$scope', 'FeedService', function ($scope, Feed) {

    var RssSource = 'http://rss.cnn.com/rss/cnn_topstories.rss';
   
        Feed.parseFeed(RssSource).then(function (res) {
            $scope.feeds = res.data.responseData.feed.entries;
        });
    
}]);

App.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);


//App.controller("FeedCtrl", ['$scope', 'FeedService', function ($scope, Feed) {
//    $scope.loadButonText = "Load";
//    $scope.loadFeed = function (e) {
//        Feed.parseFeed($scope.feedSrc).then(function (res) {
//            $scope.loadButonText = angular.element(e.target).text();
//            $scope.feeds = res.data.responseData.feed.entries;
//        });
//    }
//}]);

//App.factory('FeedService', ['$http', function ($http) {
//    return {
//        parseFeed: function (url) {
//            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
//        }
//    }
//}]);
