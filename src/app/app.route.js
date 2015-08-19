(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/list'
            });
    }

})();
