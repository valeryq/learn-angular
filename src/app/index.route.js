(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl: 'app/modules/create/create.html',
                controller: 'CreateController',
                controllerAs: 'create',
                animation: 'slide'
            })
            .when('/list', {
                templateUrl: 'app/modules/list/list.html',
                controller: 'ListController',
                controllerAs: 'list',
                animation: 'slide'
            })
            .otherwise({
                redirectTo: '/list'
            });
    }

})();
