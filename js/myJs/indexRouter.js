app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        //分类路由
        .state("category", {
        	url:"/category",
            templateUrl: "category/category.html"
        })
        //合集路由
        .state("collection", {
        	url:"/collection",
        	templateUrl:"collection/collection.html"
        })
        //在线视频路由
        .state("onlinevideo",{
            url:"/onlinevideo",
            templateUrl:"onlinevideo/onlinevideo.html"
        })
        .state("searchvideo",{
            url:"/searchvideo",
            templateUrl:"searchvideo/searchvideo.html"
        })

})