(function () {
    'use strict';

    angular
        .module('blog')
        /* Конфигурация доступа к БД */
        .constant('DB_CONFIG', {
            dbName: 'blog',
            version: '1.0',
            description: 'Some description',
            size: 1204 * 1204
        })
        .constant('$moment', moment);

})();
