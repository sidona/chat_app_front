'use strict';


angular.module('frontendApp')
  .controller('AddmessageCtrl', ['$scope', '$window', '$http', 'ENDPOINT_URI','chatDetail','auth',
    function ($scope, $window, $http, ENDPOINT_URI,chatDetail,auth) {

      chatDetail.query(function (data){
      $scope.chatV(data);
    })
      $scope.newMsg = createBlank();
      var urlParts = $window.location.pathname.split("/");
     // var nameRoom = urlParts[urlParts.length - 1];

      var chatUrl = ENDPOINT_URI + "/api/chat/:nameRoom";
      $scope.chatV=function(data){
        $scope.chat=data;
      }

      var socket = io.connect('http://localhost:3000');
      socket.emit("join");

      socket.on("broadcast", function (msg) {
        $scope.chat.push(msg);
        $scope.$apply();
      });


      $scope.save = function (newMsg) {

        $http.post(chatUrl,newMsg)
          .then(function (result) {
            $scope.chat.push(result.data);
            $scope.newMsg = createBlank();
            socket.emit("newMsg", { msg: result.data});
            console.log(newMsg)
          }, function (err) {

          });

      };


      //$scope.msg=[];
      //$scope.newMsg=[];
      //$scope.save=function(){
      //  socket.emit('join msg',$scope.newMsg);
      //};
      //socket.on('newMsg', function(data) {
      //  $scope.$apply(function () {
      //    $scope.msg.push(data.msg);
      //  });
      //});

      function createBlank() {
        return {
          msg: ""
        };
      }


    }]);


