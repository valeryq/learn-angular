(function () {
    'use strict';

    angular
        .module('blog')
        .controller('CreateController', CreateController);

    /**
     * Class CreateController
     *
     * @param $scope
     * @param ArticleRepository
     * @param $location
     * @constructor
     */
    function CreateController($scope, ArticleRepository, $location) {

        /**
         * Default article scope
         *
         * @type {{title: string, description: string}}
         */
        $scope.article = {
            title: '',
            description: ''
        };


        /**
         * Обработка формы
         */
        $scope.processForm = function () {
            ArticleRepository.create($scope.article, function () {
                $location.path('#/');
            })
        }
    }
})();
