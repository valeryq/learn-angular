(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise('/article/list');


        $stateProvider
            .state('/', {
                url: ''
            });
    }

})();
