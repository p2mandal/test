
$().ready(init);

var countries = ["UK","France","USA","India"];

var cityDB;
	function createDB(){
		var request = indexedDB.open("Countries",5);
		request.onsuccess = function(){
			cityDB = request.result;
			console.log("DataBase created successfully");
		};
				
		request.onupgradeneeded = function(e){
			cityDB = e.target.result;
			cityDB.createObjectStore("Countries",{keyPath:"name"});

		}

	}

    function addCountry(){
		var country = {
			name : $("#name").val(),
			city : $("#city1").val(),

		};
				
		var txn = cityDB.transaction("Countries","readwrite");
		var Countrycity = txn.objectStore("Countries");

		txn.oncomplete = function(){
			console.log("Countries added successfully");
		}

		txn.onerror = function(){
			console.log("Error in creating countries");
		}
				Countrycity.add(country);
			}

	function readCountry(){
		var txn = cityDB.transaction("Countries","readonly");
		var Countrycity = txn.objectStore("Countries");
		var cursor = Countrycity.openCursor();
		var ul = "<ul>";
			cursor.onsuccess = function(e){
				var records = e.target.result;
				if(records){
					ul += "<ul>";
					ul += records.value["name"] + ", " + records.value["city"] ;
					ul += "</ul>";
					records.continue();
			}
				else{
					ul += "</ul>";
					$("#results").html(ul);

				}
			}
		}

		
    function init(){
		createDB();
		$("#addbutton").on("click",addCountry);
		$("#readbutton").on("click",readCountry);

		}

        

angular.module("checkweather",[])
		.controller("weatherupdate",function($scope,$http,$window){
			console.log("Inside controller");
			$scope.country = "";
			$scope.city = "";
			$scope.min = "";
			$scope.max = "";
			$scope.temp = "";
			$scope.list = [];
			
			$window.setInterval(fetchWeather,500);

		  $scope.check = function() {
		  	if (navigator.onLine) {
		  		alert('You are Connected to the Internet!');
				} 
			else {
		  		alert('Sorry You are Offline!');
				}
		  }
		  
			
			function fetchWeather(){
				$scope.list.length = 0;
				for(var i=0;i<countries.length;i++){
					var url = "http://localhost:8080/exam/"+countries[i]+".json";
					$http.get(url)
							.success(function(data){
					$scope.list.push(data);

				});
				}
			
			}	
		});

