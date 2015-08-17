(function () {
    'use strict';

    angular
        .module('blog')
        .factory('ArticleRepository', ArticleRepository);

    /**
     * Репозиторий для постов
     *
     * @param webSql
     * @constructor
     */
    function ArticleRepository(webSql) {

        return {

            /**
             * Получить пост по ID
             *
             * @param id
             */
            find: function (id) {
                return webSql.executeQuery('SELECT * FROM articles WHERE id = ' + id).then(function (data) {
                    return data.rows.item(0);
                });
            },

            /**
             * Получение всех постов из БД
             */
            all: function () {
                /* Выбрать все записи из БД */
                return webSql.selectAll('articles').then(function (data) {
                    var articles = [];

                    for (var i = 0; i < data.rows.length; i++) {
                        articles.push(data.rows.item(i));
                    }

                    return articles;
                });
            },

            /**
             * Создание поста
             *
             * @param attributes
             */
            create: function (attributes) {
                return webSql.insert('articles', attributes);
            },

            /**
             * Обновление поста
             *
             * @param attributes
             */
            update: function (id, attributes) {
                return webSql.update('articles', attributes, {id: id});
            },

            /**
             * Удаление поста из БД
             */
            delete: function (id) {
                return webSql.del('articles', {id: id});
            }
        }
    }
})();