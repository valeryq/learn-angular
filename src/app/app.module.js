(function () {
    'use strict';

    angular
        .module('blog',
        [
            /* Global modules */
            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngResource',
            'ngRoute',
            'ngMaterial',
            'angular-websql',

            /* Application modules */
            'blog.article'
        ]);

})();
