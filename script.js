angular.module('currencyConverterApp', [])
.controller('ConverterController', function($scope, $http) {
    $scope.currencies = ['USD', 'EUR', 'GBP', 'JPY']; // Add more currencies if needed
    $scope.fromCurrency = 'USD';
    $scope.toCurrency = 'EUR';
    
    $scope.convert = function() {
        var url = 'https://api.exchangerate-api.com/v4/latest/' + $scope.fromCurrency;
        $http.get(url)
        .then(function(response) {
            var rate = response.data.rates[$scope.toCurrency];
            $scope.result = $scope.amount * rate;
        })
        .catch(function(error) {
            console.log(error);
        });
    };
});
