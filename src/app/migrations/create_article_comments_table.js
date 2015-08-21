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
        webSql.createTable('article_comments', {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL",
                "primary": true,
                "auto_increment": true
            },
            "article_id": {
                "type": "INTEGER",
                "null": "NOT NULL"
            },
            "username": {
                "type": "TEXT"
            },
            "body": {
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