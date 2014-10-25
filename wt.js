window.onload = init;
	function init(){

	};

angular.module("weather",[])
		.controller("reports",function($scope,$http){
			console.log("inside controller");
			$scope.country = "";
			$scope.city = "";
			$scope.min = "";
			$scope.max = "";
			$scope.tim = "";
			var url = "http://localhost:8080/day19/weather.json";
			$http.get(url)
				.success(function(data){
					console.log(data);
					console.log(data.sys.country);
					console.log(data.main.humidity);
					$scope.country = data.sys.country;
					$scope.city = data.name;
					$scope.min = "";
					$scope.max = "";
					$scope.tim = "";

				});
		});