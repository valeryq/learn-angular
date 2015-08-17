(function () {
    'use strict';

    angular
        .module('blog')
        .controller('CreateController', CreateController);

    /**
     * Class CreateController
     *
     * @param ArticleService
     * @param $location
     * @constructor
     */
    function CreateController(ArticleService, $location) {

        var vm = this;

        vm.article = {};
        vm.processForm = processForm;


        /**
         * Обработка формы
         */
        function processForm() {
            ArticleService.create(vm.article).then(function () {
                $location.path('#/');
            });
        }
    }
})();
