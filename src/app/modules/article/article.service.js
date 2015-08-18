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

        var vm = this;

        vm.find = find;
        vm.getList = getList;
        vm.create = create;
        vm.update = update;
        vm.remove = remove;


        /**
         * Поиск одного поста записи
         *
         * @param id
         * @returns {*}
         */
        function find(id) {
            return ArticleRepository.find(id);
        }

        /**
         * Получение всех постов
         *
         * @returns {*}
         */
        function getList() {
            return ArticleRepository.all();
        }


        /**
         * Создание поста
         *
         * @param attributes
         * @returns {*}
         */
        function create(attributes) {
            return ArticleRepository.create(attributes);
        }

        /**
         * Обновление поста
         *
         * @param id
         * @param attributes
         * @returns {*}
         */
        function update(id, attributes) {
            return ArticleRepository.update(id, attributes);
        }

        /**
         * Удаление поста
         *
         * @param id
         * @returns {*}
         */
        function remove(id) {
            return ArticleRepository.remove(id);
        }
    }
})();