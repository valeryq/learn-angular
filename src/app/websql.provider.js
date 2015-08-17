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

        var vm = this;

        vm.config = {};
        vm.$get = getProvider;
        vm.setConfig = setConfig;


        /**
         * Получение провайдера
         *
         * @param $webSql
         * @returns {*|{executeQuery, insert, update, del, select, selectAll, whereClause, replace, createTable, dropTable}}
         */
        function getProvider($webSql) {
            return $webSql.openDatabase(vm.config.dbName, vm.config.version, vm.config.description, vm.config.size);
        }

        /**
         * Установка новых конфигураций провайдера
         *
         * @param config
         */
        function setConfig(config) {
            vm.config = config;
        }
    }

})();
