videoApp.controller('ResultCtrl', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.populateResult = function(movie){
		$scope.movie = movie;
		console.log(movie.title);
		console.log(movie.video);
		document.getElementById("vid").load();
		//$scope.$apply();
	}
}]);