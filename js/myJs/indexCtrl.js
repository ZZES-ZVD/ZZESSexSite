app.controller("indexCtrl", function($scope,$log,$state,$http){
	var categoryurl = 'https://api.avgle.com/v1/categories'
	$http({
		method:"get",
		url:categoryurl,
		header:{
			"content-type":"application/json"
		}
	}).then(function(req){
		$log.log(req.data.response)
		$scope.categories = req.data.response.categories
	})
})