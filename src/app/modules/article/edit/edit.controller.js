(function () {
    'use strict';

    angular
        .module('blog')
        .controller('EditController', EditController);

    /**
     * Class EditController
     *
     * @param $scope
     * @param $route
     * @param ArticleRepository
     * @param $location
     * @constructor
     */
    function EditController($scope, $route, ArticleRepository, $location) {

        /**
         * Получение поста по его идентификатору
         */
        ArticleRepository.find($route.current.params.id, function (article) {
            $scope.article = angular.copy(article);
        });


        /**
         * Обработка формы (обновление поста)
         */
        $scope.processForm = function () {
            ArticleRepository.update($scope.article.id, $scope.article, function (data) {
                $location.path('#/');
            });
        }
    }
})();