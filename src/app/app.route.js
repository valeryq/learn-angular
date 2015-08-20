(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise('/404');

        $stateProvider.state('404', {
            url: '/404',
            templateUrl: 'app/components/404.html'
        });
    }

})();
