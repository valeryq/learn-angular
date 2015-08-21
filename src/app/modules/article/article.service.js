(function () {
    'use strict';

    angular
        .module('blog.article')
        .service('ArticleService', ArticleService);

    /**
     * Сервис для постов
     *
     * @constructor
     * @ngInject
     */
    function ArticleService(ArticleRepository) {
        this.ArticleRepository = ArticleRepository;
    }

    /**
     * Поиск одного поста записи
     *
     * @param id
     * @returns {*}
     */
    ArticleService.prototype.find = function (id) {
        return this.ArticleRepository.find(id);
    };

    /**
     * Получение всех постов
     *
     * @returns {*}
     */
    ArticleService.prototype.getList = function () {
        return this.ArticleRepository.all();
    };


    /**
     * Создание поста
     *
     * @param attributes
     * @returns {*}
     */
    ArticleService.prototype.create = function (attributes) {
        return this.ArticleRepository.create(attributes);
    };

    /**
     * Обновление поста
     *
     * @param id
     * @param attributes
     * @returns {*}
     */
    ArticleService.prototype.update = function (id, attributes) {
        return this.ArticleRepository.update(id, attributes);
    };

    /**
     * Обновить или создать пост
     *
     * @param article
     * @returns {*}
     */
    ArticleService.prototype.createOrUpdate = function (article) {

        var promise = null;

        if (article.hasOwnProperty('id')) {
            promise = this.ArticleRepository.update(article.id, article);
        } else {
            promise = this.ArticleRepository.create(article);
        }

        return promise;
    };

    /**
     * Удаление поста
     *
     * @param id
     * @returns {*}
     */
    ArticleService.prototype.remove = function (id) {
        return this.ArticleRepository.remove(id);
    };

    /**
     * Получить комментарии поста
     *
     * @param id - идентификатор поста
     * @returns {*}
     */
    ArticleService.prototype.comments = function (id) {
        return this.ArticleRepository.comments(id);
    };

    /**
     * Создание комментария к посту
     *
     * @param id - идентификатор поста
     * @param attributes - аттрибуты комментария
     *
     * @returns {*}
     */
    ArticleService.prototype.commentsCreate = function (id, attributes) {
        return this.ArticleRepository.commentsCreate(id);
    };

})();