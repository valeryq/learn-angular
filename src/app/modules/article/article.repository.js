(function () {
    'use strict';

    angular
        .module('blog')
        .service('ArticleRepository', ArticleRepository);

    /**
     * Репозиторий для постов
     *
     * @param webSql
     *
     * @constructor
     * @ngInject
     */
    function ArticleRepository(webSql) {

        var vm = this;

        vm.find = find;
        vm.all = all;
        vm.create = create;
        vm.update = update;
        vm.remove = remove;


        /**
         * Получить пост по ID
         *
         * @param id
         */
        function find(id) {
            return webSql.executeQuery('SELECT * FROM articles WHERE id = ' + id).then(function (data) {
                return angular.copy(data.rows.item(0));
            });
        }

        /**
         * Получение всех постов из БД
         */
        function all() {
            /* Выбрать все записи из БД */
            return webSql.selectAll('articles').then(function (data) {
                var articles = [];

                for (var i = 0; i < data.rows.length; i++) {
                    articles.push(data.rows.item(i));
                }

                return articles;
            });
        }

        /**
         * Создание поста
         *
         * @param attributes
         */
        function create(attributes) {
            return webSql.insert('articles', attributes);
        }

        /**
         * Обновление поста
         *
         * @param attributes
         */
        function update(id, attributes) {
            return webSql.update('articles', attributes, {id: id});
        }

        /**
         * Удаление поста из БД
         */
        function remove(id) {
            return webSql.del('articles', {id: id});
        }
    }
})();