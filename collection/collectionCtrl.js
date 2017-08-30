app.controller("collectionCtrl", function($scope, $http, $log, $state) {
    var collectionurl1 = 'https://api.avgle.com/v1/collections/1'
    // var collectionurl2 = 'https://api.avgle.com/v1/collections/2'


    $http({
        method: "get",
        url: collectionurl1,
    }).then(function(req) {
        $log.log(req.data.response.collections)
        $scope.collections1 = req.data.response.collections
    })



})