// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('app', {
    url:'/app',
    abstract:true,
    templateUrl:'templates/main.html',
    controller:'main'
  })

  .state('app.main', {
    url:'/main',
    templateUrl:'templates/main.html',
    controller:'main'
  })
})


app.controller('main', function($http,$scope,$ionicSlideBoxDelegate, $ionicModal){
 
  


  // ===================================

  $scope.slideByIndex = 0;
  


  $scope.slideHasChanged = function(index) {
    $scope.slideByIndex = index;
  }

  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.slide($scope.slideByIndex + 1);
  }

  $scope.prevSlide = function() {
    $ionicSlideBoxDelegate.slide($scope.slideByIndex - 1);
  }

  $scope.totop = function() {
    var y = window.pageYOffset;
    console.log(y);
  }

})