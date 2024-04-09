const app = angular.module("appHTML", []);

app.controller("FormController", function ($scope, $http){
    $scope.name = "Miu Miu Miu";
    console.log($scope.name)
})

app.controller("ListController", ListController);

function ListController($scope, $http){
    $http.get("/api/products").then(function (response){
        console.log(response.data.product);
        $scope.listData = response.data.product;
    })
}