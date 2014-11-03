/**
*  Module
*
* Description
*/
angular
     .module('app', [
     	'ui.router'
     ])
    .config(['$urlRouterProvider', '$stateProvider', function(urlRouterProvider, stateProvider) {
    	urlRouterProvider.otherwise('/');

    	stateProvider
    	 .state('home', {
    	 	url: '/',
    	 	templateUrl: 'templates/home.html',
            controller: 'homeCtrl',
    	 })
    	 .state('about', {
    	 	url: '/about',
    	 	templateUrl: 'templates/about.html',
            controller: 'aboutCtrl',
            resolve: {
                friends: function($http){
                    return $http.get('api/friends.php').then(function(response){return response.data});
                }
            }
    	 })
    	 .state('contact', {
    	 	url: '/contact',
    	 	templateUrl: 'templates/contact.html'
    	 })
    }])






