(function () {
    'use strict';

    angular
        .module('blog')
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
     * Удаление поста
     *
     * @param id
     * @returns {*}
     */
    ArticleService.prototype.remove = function (id) {
        return this.ArticleRepository.remove(id);
    };

})();