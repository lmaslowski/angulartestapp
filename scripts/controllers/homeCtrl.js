/**
*  Module
*
* Description
*/
angular
.module('app')
.controller('homeCtrl', function($scope, $log, Friends){
	$scope.title = "Home";

	$scope.items = ['Home', 'About', 'Contact'];
	$scope.selectedValueItem = 'Home';

	Friends.get().then(function(response){
		$scope.friends = response.data;
		$scope.selectedValueFriend="30";
	})

	$scope.save = function(){
		alert(JSON.stringify($scope.friends));
	}

	$scope.delete = function(index){
		$scope.friends.splice(index ,1)
	}

	$scope.add = function(){
		var friend = {"name":"", "age":""};
		$scope.friends.push(friend);
	}
	
})