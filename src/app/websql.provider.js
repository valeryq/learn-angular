(function () {
    'use strict';

    angular
        .module('blog')
        .provider('webSql', webSql);


    /**
     * DB provider
     *
     * @returns {*|{executeQuery, insert, update, del, select, selectAll, whereClause, replace, createTable, dropTable}}
     */
    function webSql() {
        this.config = {};
    }

    /**
     * Получение провайдера
     *
     * @param $webSql
     * @returns {*|{executeQuery, insert, update, del, select, selectAll, whereClause, replace, createTable, dropTable}}
     *
     * @ngInject
     */
    webSql.prototype.$get = function ($webSql) {
        return $webSql.openDatabase(this.config.dbName, this.config.version, this.config.description, this.config.size);
    };

    /**
     * Установка новых конфигураций провайдера
     *
     * @param config
     */
    webSql.prototype.setConfig = function (config) {
        this.config = config;
    };

})();
