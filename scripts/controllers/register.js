'use strict';


angular.module('frontendApp')
  .controller('RegisterCtrl', function ($scope,$http,$rootScope,alert,authToken,ENDPOINT_URI) {
    $scope.submit=function(){
      var url=ENDPOINT_URI+'/register';
      //autenticarea cu api/api
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
          alert('warning','oops','could not register')
      })
    }
  });
