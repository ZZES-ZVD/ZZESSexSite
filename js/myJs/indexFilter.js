app.filter('currentDate', function(){
	return function(text){
		var date = new Date(text).toLocaleString()
		return date
	}
})