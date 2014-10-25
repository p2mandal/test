var movies = angular.module("Movies");
movies.controller("SearchController",function($scope,$http,$window){
	var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&callback=JSON_CALLBACK&q=MOVIE";
	
	$window.onpopstate = function(e){
		var data = e.state;
		if(data){
			$scope.moviescollection = data.movies;
			$scope.moviename = data.movieName;
			$scope.result = "Found " + data.total + " matches.";
			$scope.$apply();	
		}
	};
	$scope.searchMovies = function(){
		$scope.moviescollection = [];
		console.log($scope.moviename);
		var url = baseUrl.replace("MOVIE",$scope.moviename);
		$http.jsonp(url).
		 success(function(data){
		 	$scope.result = "Found " + data.total + " matches.";
		 	$scope.moviescollection = data.movies;
		 	var historyData = {
		 		movies : data.movies,
		 		total : data.total,
		 		movieName : $scope.moviename
		 	};
		 	$window.history.pushState(historyData);
		 }).
		 error(function(er){

		 });
	}
});