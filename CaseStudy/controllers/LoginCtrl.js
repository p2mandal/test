videoApp.controller('LoginCtrl', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.userName = "admin";
	$scope.userPass = "admin";
	$rootScope.showLogin = true;
	$rootScope.homeShow = false;
	$scope.login = function(){
		if($scope.userName == "admin" && $scope.userPass == "admin"){
			$rootScope.showLogin = false;
			$rootScope.homeShow = true;
			$rootScope.showResults = true;

		}
	}
}])