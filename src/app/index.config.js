(function () {
    'use strict';

    angular
        .module('blog')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
    }

})();
