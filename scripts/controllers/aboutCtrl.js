angular
	.module('app')
	.controller('aboutCtrl', function($log, $scope, $http, friends){

		$log.log(friends);
		$scope.friends = friends;
	})
