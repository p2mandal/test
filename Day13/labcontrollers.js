//labcontrollers.js

var mod = angular.module("PeopleModule");

mod.controller("MainController",function($scope){});

mod.controller("AddPersonFormController",function($scope,$rootScope){
	$rootScope.persons = [];
	$scope.addPerson = function(){
		$rootScope.peopledisplaystyle = {"display":"block"};
		var personObj = {
			name : $scope.name,
			age : $scope.age,
			selectedForRemoval : false
		};
		$rootScope.persons.push(personObj);
	}
});

mod.controller("PeopleDisplayController",function($scope,$rootScope){
	$rootScope.peopledisplaystyle = {"display":"none"};
	$scope.removePersons = function(){
		var newArray = [];
		for(var i=0;i<$rootScope.persons.length;i++){
			var person = $rootScope.persons[i];
			if(!person.selectedForRemoval)
				newArray.push(person);
		}
		$rootScope.persons = newArray;
		if(newArray.length == 0)
			$rootScope.peopledisplaystyle = {"display" : "none"};
	}
});


