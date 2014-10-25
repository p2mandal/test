//controllers.js

/* 
* Does not create EatModule. 
* Returns a reference to the existing one
*/
var eatModule = angular.module("EatModule");

eatModule.controller("MainController",function($scope){
});

eatModule.controller("LoginController",function($scope,$rootScope){
	$scope.errorstyle = {"display":"none"};
	$rootScope.loginstyle = {"display":"block"};
	$scope.login = function(){
		var email = $scope.email;
		var password = $scope.password;
		if(email != "sam@yahoo.com" || password != "orderfood")
			$scope.errorstyle = {"display":"inline"};
		else {
			$scope.errorstyle = {"display":"none"};
			$rootScope.loginstyle = {"display":"none"};
			$rootScope.homestyle = {"display":"block"};
		}
	}
});
eatModule.controller("HomeController",function($scope,$rootScope){
	$rootScope.homestyle = {"display":"none"};
});