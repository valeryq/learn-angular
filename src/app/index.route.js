(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'CreateController',
                controllerAs: 'create',
                animation: 'slide'
            })
            .when('/list', {
                templateUrl: 'app/modules/article/list/list.html',
                controller: 'ListController',
                controllerAs: 'list',
                animation: 'slide'
            })
            .when('/edit/:id', {
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'EditController',
                controllerAs: 'edit',
                animation: 'slide'
            })
            .otherwise({
                redirectTo: '/list'
            });
    }

})();
