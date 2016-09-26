// public/core.js
var scotchTodo = angular.module('jediHolonet', []);  


function mainController($scope, $http) {
    $scope.formData = {}; 
    
    // when landing on the page, get all Jedi and show them
    $http.get('http://localhost:3000/jedi/')
        .success(function(data) {
            $scope.jedi = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

     

}