'use strict';

angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope,$http,ENDPOINT_URI,authToken,alert) {
    $scope.submit=function(){
      var url=ENDPOINT_URI+'/login';
      var user={
        email:$scope.email,
        password:$scope.password
      }

      $http.post(url,user).success(function(res){
        //console.log("good")
        alert('success', ' ','welcome, '+res.user.email)
        authToken.setToken(res.token);
      })
        .error(function(err){
          //console.log("bad");
          alert('warning','oops','wrong')
        })
    }
  });
