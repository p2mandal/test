var addressBook = angular.module("AddressBook");

addressBook.controller("Main",function($scope){

});

addressBook.controller("AddContact",function($scope,$rootScope){
	$rootScope.addform = {"display":"none"};
	$scope.editing = "false";
	$scope.contactToBeEdited = null;
	$scope.addContact = function(){
		if($scope.contactToBeEdited != null){
			AddressDB.executeQuery("update contacts set firstname=?,lastname=?,mobile=? where id=?",
				[$scope.firstname,$scope.lastname,$scope.mobile,$scope.mobile],
				function(result){
					var temp = [];
					for(var i=0;i<$rootScope.contactsCollection.length;i++){
						var item = 	$rootScope.contactsCollection[i];
						if(item == $scope.contactToBeEdited){
							var obj = {};
							obj.firstname = $scope.firstname;
							obj.lastname = $scope.lastname;
							obj.mobile = $scope.mobile;
							obj.id = $scope.mobile;
							temp.push(obj);
						}
						else
							temp.push(item);
					}
					$rootScope.contactsCollection = temp;
					console.log($rootScope.contactsCollection);
					$scope.contactToBeEdited = null;
					$scope.$apply();	
				},
				function error(err){
					console.log(err);
				});
		}
		else{
			AddressDB.executeQuery("insert into contacts values(?,?,?,?)",
			[$scope.mobile,$scope.firstname,$scope.lastname,$scope.mobile],
			function(result){
				console.log(result);
			},
			function(error){
				console.log(error);
			});
		}
		$rootScope.list = {"display":"block"};
		$rootScope.addform = {"display":"none"};
	}
	$rootScope.editContact = function(contact){
		$rootScope.list = {"display":"none"};
		$rootScope.addform = {"display":"block"};
		$scope.firstname = contact.firstname;
		$scope.lastname = contact.lastname;
		$scope.mobile = contact.mobile;
		$scope.contactToBeEdited = contact;
	}
	$scope.cancelAddContact = function(){
		$rootScope.list = {"display":"block"};
		$rootScope.addform = {"display":"none"};
	}
});

addressBook.controller("Contacts",function($scope,$rootScope){
	$rootScope.list = {"display":"block"};
	$rootScope.contactsCollection = [];
	AddressDB.executeQuery("select * from contacts",
				[],
				function(result){
					for(var i=0;i<result.rows.length;i++){
						$rootScope.contactsCollection.push(result.rows.item(i));
					}
					$rootScope.$apply();
				},
				function(error){
					console.log(error);
				});

});






