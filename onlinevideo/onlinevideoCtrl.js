app.controller("onlinevideoCtrl", function($scope,$http,$log,$state){
	var onlinevideourl = "https://api.avgle.com/v1/videos/1"
	$http({
		method:"get",
		url:onlinevideourl,
	}).then(function(req){
		$log.log(req.data.response)
		$scope.totalnum = req.data.response.total_videos
		$scope.onlinevideos = req.data.response.videos
	})
})