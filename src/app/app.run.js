(function () {
    'use strict';

    angular
        .module('blog')
        .run(migrate);

    /** @ngInject */
    function migrate(webSql) {

        /**
         * Create DB schema
         */
        webSql.createTable('articles', {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL",
                "primary": true,
                "auto_increment": true
            },
            "title": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "description": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "created_at": {
                "type": "TIMESTAMP",
                "null": "NOT NULL",
                "default": "CURRENT_TIMESTAMP"
            }
        });
    }
})();
