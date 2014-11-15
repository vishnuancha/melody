// public/core.js
var transactions = angular.module('transactions', []);

function mainController($scope, $http) {
    

    $scope.melody = {"records":[{"transaction":{"apicalls":[{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"userread"},{"service":"merchant preferences"}],"end_time":"435344352345","endpoint":"post.v1.carts.cart","start_time":"2453464563463"},{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"fundingpolicyservice"}],"end_time":"435344352345","endpoint":"get.v1.carts.eligiblepaymentmethods","start_time":"2453464563463"},{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"moneyplanningservice"}],"end_time":"435344352345","endpoint":"post.v1.carts.gfo","start_time":"2453464563463"},{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"fulfillmentinternalserv"},{"service":"PLS"}],"end_time":"435344352345","endpoint":"post.v1.carts.pay","start_time":"2453464563463"}],"token":"EC-1233542GR1232354"}}]};;

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
