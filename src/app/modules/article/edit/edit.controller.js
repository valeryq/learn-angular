(function () {
    'use strict';

    angular
        .module('blog')
        .controller('EditController', EditController);

    /**
     * Class EditController
     *
     * @param ArticleService
     * @param $route
     * @param $location
     * @constructor
     */
    function EditController(ArticleService, $route, $location) {

        var vm = this;

        vm.processForm = processForm;

        /**
         * Получение поста по его идентификатору
         */
        ArticleService.find($route.current.params.id).then(function (article) {
            vm.article = angular.copy(article);
        });

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