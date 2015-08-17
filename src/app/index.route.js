(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'app/modules/article/list/list.html',
                controller: 'ListController',
                controllerAs: 'vm'
            })
            .when('/create', {
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'CreateController',
                controllerAs: 'vm'
            })
            .when('/edit/:id', {
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'EditController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/list'
            });
    }

})();
