(function () {
    'use strict';

    angular
        .module('blog')
        .controller('CreateController', CreateController);

    /** @ngInject */
    function CreateController($scope, webSql, $location) {
        $scope.article = {
            title: '',
            description: ''
        };


        /**
         * Обработать форму
         */
        $scope.processForm = function () {
            webSql.insert('articles', $scope.article).then(function (results) {
                $location.path('#/');
            })
        }
    }
})();
