(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/article/list');
    }

})();
