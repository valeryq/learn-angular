(function () {
    'use strict';

    angular
        .module('blog')
        .config(config);

    /** @ngInject */
    function config($logProvider, $locationProvider, webSqlProvider, DB_CONFIG) {
        // Enable log
        $logProvider.debugEnabled(true);

        /* Включаем для роутов HTML5 History API */
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        /* Конфигурируем webSql провайдер */
        webSqlProvider.setConfig(DB_CONFIG);
    }

})();
