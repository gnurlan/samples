export default function startRatePolling(endpoint, interval) {
    // TODO: fill in requests to the endpoint in the interval, and update the view
    
    
	angular.module("RateApp", [])
    
	.controller("RateCtrl", function($scope, $http, $interval) {
    
    //getting rates from the server
	$scope.getRateList = function() {
		$http.get(endpoint)
		.success(function(data, status, headers, config){
			return $scope.rates = data.rates;
		});
	}
	
	//looped update rates
	$interval($scope.getRateList, interval);
	
	});
	
}
