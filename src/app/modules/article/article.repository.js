(function () {
    'use strict';

    angular
        .module('blog.article')
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
        this.webSql = webSql;
    }

    /**
     * Получить пост по ID
     *
     * @param id
     */
    ArticleRepository.prototype.find = function (id) {
        return this.webSql.executeQuery('SELECT * FROM articles WHERE id = ' + id).then(function (data) {
            return angular.copy(data.rows.item(0));
        });
    };

    /**
     * Получение всех постов из БД
     */
    ArticleRepository.prototype.all = function () {
        /* Выбрать все записи из БД */
        return this.webSql.selectAll('articles').then(function (data) {
            var articles = [];

            for (var i = 0; i < data.rows.length; i++) {
                articles.push(data.rows.item(i));
            }

            return articles;
        });
    };

    /**
     * Создание поста
     *
     * @param attributes
     */
    ArticleRepository.prototype.create = function (attributes) {
        return this.webSql.insert('articles', attributes);
    };

    /**
     * Обновление поста
     *
     * @param id
     * @param attributes
     */
    ArticleRepository.prototype.update = function (id, attributes) {
        return this.webSql.update('articles', attributes, {id: id});
    };

    /**
     * Удаление поста из БД
     *
     * @param id
     * @returns {*}
     */
    ArticleRepository.prototype.remove = function (id) {
        return this.webSql.del('articles', {id: id});
    };

    /**
     * Получить комментарии поста
     *
     * @param id - идентификатор поста
     * @returns {*}
     */
    ArticleRepository.prototype.comments = function (id) {
        return this.webSql.executeQuery('SELECT * FROM article_comments WHERE article_id = ' + id).then(function (data) {
            var comments = [];

            for (var i = 0; i < data.rows.length; i++) {
                comments.push(data.rows.item(i));
            }

            return comments;
        });
    };

    /**
     * Создание комментария
     *
     * @param id - идентификатор поста
     * @param attributes - аттрибуты комментария
     *
     * @returns {*}
     */
    ArticleRepository.prototype.commentsCreate = function (id, attributes) {

        attributes.article_id = id;

        return this.webSql.insert('article_comments', attributes);
    };

})();