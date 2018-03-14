	var routerUrl = angular.module('routerUrl',["ui.router"]);
	
		routerUrl.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

			$stateProvider.state({
				name:'app',
				url:'/app',
				templateUrl:'app/app.html'
//				controller: "ngCtrl"
			})
			$stateProvider.state({
				name:'app.list',
				url:'app/list/id=:id',
				templateUrl:'app/list.html'
			})
			$stateProvider.state({
				name:'app.appDetail',
				url:'app/detail/id=:id',
				templateUrl:'app/detail.html'
//				controller: "detail"
			})
			$urlRouterProvider.otherwise('app');
			
		}])
		routerUrl.controller('ngCtrl', function($scope, $http) {
		    $http({
		        method: 'GET',
		        url: 'js/txt.json'
		    }).then(function successCallback(response) {
					$scope.ids = response.data.data.data;
					console.log($scope.ids);
		        }, function errorCallback(response) {
		    });
		  
		});
		routerUrl.controller('detail', function($scope, $http) {
		    $http({
		        method: 'GET',
		        url: 'js/id5.json'
		    }).then(function successCallback(response) {
//		    	var data = response.data;
//			for(var i in data){
//			    console.log(data[i]);
//			    
//			}
				$scope.detail = response.data;
				$scope.id = $scope.detail.id;
				$scope.name = $scope.detail.name;
		        }, function errorCallback(response) {
		    });
		  
		});