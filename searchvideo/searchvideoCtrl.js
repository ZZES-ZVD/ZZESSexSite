app.controller("searchvideoCtrl", function($scope,$http,$log){
	$scope.searchbtn = function(){
		var searchurl = 'https://api.avgle.com/v1/jav/'+$scope.search+'/0'
		$http({
			method:"get",
			url:searchurl,
			headers:{
				"content-type":"application/json"
			}
		}).then(function(req){
			$log.log(req.data.response)
			$scope.total = req.data.response.total_videos
			$scope.videos = req.data.response.videos
		})	
	}
	
	
})