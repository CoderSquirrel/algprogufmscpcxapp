var SERVER  = "http://cpcxalgserver.herokuapp.com/";

angular.module('starter.controllers', [])

.controller('SlideCtrl', function($scope, $http, $ionicLoading) {


  $ionicLoading.show();
            $http.get(SERVER+"slide/lista/").
                then(function(response) {
                 // console.log(JSON.stringify(response));
                  $scope.slides = response.data;
                 
                 $ionicLoading.hide();
                    return response;
                }, function(err) {
                   $ionicLoading.hide();
                    console.log(err);
                });

                $scope.myclick = function (link) {
                  console.log("click "+link);
                  window.open(link, "_system", "location=yes");
                }
})

.controller('TrabalhoCtrl', function($scope, $http, $ionicLoading) {
  $ionicLoading.show();
            $http.get(SERVER+"trabalho/lista/").
                then(function(response) {
                 // console.log(JSON.stringify(response));
                  $scope.trabalhos = response.data;
                 
                 $ionicLoading.hide();
                    return response;
                }, function(err) {
                   $ionicLoading.hide();
                    console.log(err);
                });

                $scope.myclick = function (link) {
                  console.log("click "+link);
                  window.open(link, "_system", "location=yes");
                }
})

.controller('ExercicioCtrl', function($scope, $stateParams, $ionicLoading, $http) {
  $ionicLoading.show();
            $http.get(SERVER+"exercicio/lista/").
                then(function(response) {
                 // console.log(JSON.stringify(response));
                  $scope.exercicios = response.data;
                 
                 $ionicLoading.hide();
                    return response;
                }, function(err) {
                   $ionicLoading.hide();
                    console.log(err);
                });

                $scope.myclick = function (link) {
                  console.log("click "+link);
                  window.open(link, "_system", "location=yes");
                }

})

.controller('DataCtrl', function($scope, $http, $ionicLoading) {
   console.log("DataCtrl");
$ionicLoading.show();
            $http.get(SERVER+"data/lista").
                then(function(response) {
                  $scope.data = response.data;
                 //  console.log(response);
                 $ionicLoading.hide();
                    return response;
                }, function(err) {
                   $ionicLoading.hide();
                    console.log(err);
                });
});
