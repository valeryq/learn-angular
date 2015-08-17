(function () {
    'use strict';

    angular
        .module('blog')
        .factory('webSql', webSql);


    /**
     * DB factory
     *
     * @param $webSql
     * @returns {*|{executeQuery, insert, update, del, select, selectAll, whereClause, replace, createTable, dropTable}}
     */
    function webSql($webSql) {
        return $webSql.openDatabase('blog', '1.0', 'DB for blog', 1024 * 1024);
    }

})();
