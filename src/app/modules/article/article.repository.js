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
             * @param callback
             */
            find: function (id, callback) {
                webSql.executeQuery('SELECT * FROM articles WHERE id = ' + id).then(function (data) {
                    try {
                        callback(data.rows.item(0));
                    } catch (ex) {
                        callback(null);
                    }
                });
            },

            /**
             * Получение всех постов из БД
             *
             * @param callback
             */
            all: function (callback) {
                /* Выбрать все записи из БД */
                webSql.selectAll('articles').then(function (data) {
                    var articles = [];

                    for (var i = 0; i < data.rows.length; i++) {
                        articles.push(data.rows.item(i));
                    }

                    callback(articles);
                });
            },

            /**
             * Создание поста
             *
             * @param attributes
             * @param callback
             */
            create: function (attributes, callback) {
                webSql.insert('articles', attributes).then(callback);
            },

            /**
             * Обновление поста
             *
             * @param attributes
             * @param callback
             */
            update: function (id, attributes, callback) {
                webSql.update('articles', attributes, {id: id}).then(callback);
            },

            /**
             * Удаление поста из БД
             *
             * @param callback
             */
            delete: function (id, callback) {
                webSql.del('articles', {id: id});
                callback();
            }
        }
    }
})();