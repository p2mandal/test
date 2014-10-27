window.onload = init;
	function init(){
		createDB();
	};
var countries = ["UK","France","USA"];

var cityDB;
			function createDB(){
				var request = indexedDB.open("Accenture",5);
				request.onsuccess = function(){
					countryDB = request.result;
					console.log("DB created successfully");

				};
				
				request.onupgradeneeded = function(e){
					cityDB = e.target.result;
					cityDB.createObjectStore("accenture",{keyPath:"name"});

				}

			}



angular.module("weather",[])
		.controller("reports",function($scope,$http,$window){
			console.log("inside controller");
			$scope.country = "";
			$scope.city = "";
			$scope.min = "";
			$scope.max = "";
			$scope.temp = "";
			$scope.list = [];
			
			$window.setInterval(fetchData,2000);
			if (navigator.onLine) {
		  alert('online')
		} else {
		  alert('offline');
		}
			
			function fetchData(){
				$scope.list.length = 0;
				for(var i=0;i<countries.length;i++){
					var url = "http://localhost:8080/Exam2/"+countries[i]+".json";
					$http.get(url)
							.success(function(data){
					$scope.list.push(data);
				});
				}
			
			}	
		});

