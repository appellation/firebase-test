/**
 * Created by nelso on 9/27/2016.
 */
var app = angular.module("firebaseTest", [
    "firebase"
]);

app.controller("ChatController", ['$scope', '$firebaseArray',
    function($scope, $firebaseArray)    {
        var ref = firebase.database().ref('messages');
        $scope.messages = $firebaseArray(ref);

        $scope.addMessage = function(msg)   {
            $scope.messages.$add({
                content: msg,
                sent: firebase.database.ServerValue
            });
            $scope.newMessage = null;
        }
    }
]);