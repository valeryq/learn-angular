(function () {
    'use strict';

    angular
        .module('blog.user')
        .config(routeConfig);


    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('user', {
                abstract: true,
                template: '<ui-view />'
            })
            .state('user.login', {
                url: '/login',
                templateUrl: 'app/modules/user/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });
    }


})();