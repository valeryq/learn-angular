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
            'ui.router',
            'ngMaterial',
            'angular-websql',

            /* Application modules */
            'blog.article'
        ]);

})();
