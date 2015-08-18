(function () {
    'use strict';

    angular
        .module('blog')
        .controller('EditController', EditController);

    /**
     * Class EditController
     *
     * @param article - пост (resolve in routeProvider)
     * @param ArticleService
     * @param $location
     *
     * @constructor
     * @ngInject
     */
    function EditController(article, ArticleService, $location) {

        var vm = this;

        vm.article = article;
        vm.processForm = processForm;

        /**
         * Обработка формы (обновление поста)
         */
        function processForm() {
            ArticleService.update(vm.article.id, vm.article).then(function () {
                $location.path('#/');
            });
        }
    }

})();