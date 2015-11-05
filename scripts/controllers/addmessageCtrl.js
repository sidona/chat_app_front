'use strict';


angular.module('frontendApp')
  .controller('AddmessageCtrl', function ($scope,$window, $http,ENDPOINT_URI) {
    $scope.chat = [];
    $scope.newMsg = createBlank();

    // Get the category name
    var urlParts = $window.location.pathname.split("/");
    var nameRoom = urlParts[urlParts.length - 1];

    var chatUrl = ENDPOINT_URI+"/api/chat/:nameRoom";

    var socket=io.connect('http://localhost:3000');



    socket.emit("join msg", nameRoom);

    socket.on("broadcast", function (msg) {
      $scope.chat.push(msg);
      socket.send(window.location);
      $scope.$apply();
    });


    $scope.save = function () {

      $http.post(chatUrl, $scope.newMsg)
        .then(function (result) {
          // success
          $scope.chat.push(result.data);
          $scope.newMsg = createBlank();
          socket.emit("newMsg", { nameRoom: nameRoom, msg: result.data });
        }, function (err) {

        });

    };

    function createBlank() {
      return {
        msg: ""
      };
    }

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

  });


