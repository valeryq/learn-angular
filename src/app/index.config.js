(function () {
    'use strict';

    angular
        .module('blog')
        .config(config);

    /** @ngInject */
    function config($logProvider, webSqlProvider, DB_CONFIG) {
        // Enable log
        $logProvider.debugEnabled(true);

        /* Конфигурируем webSql провайдер */
        webSqlProvider.setConfig(DB_CONFIG);
    }

})();
