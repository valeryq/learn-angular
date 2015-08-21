(function () {
    'use strict';

    angular
        .module('blog')
        .directive('comments', CommentsDirective);

    function CommentsDirective() {
        var directive = {
            restrict: 'E',
            scope: {
                comments: '=',
                load: '&',
                create: '&'
            },
            controller: CommentsDirectiveController,
            templateUrl: 'app/components/comment/list.html',
            replace: true
        };

        return directive;
    }

    /**
     * Контроллер для комментариев
     *
     * @param $scope
     *
     * @constructor
     * @ngInject
     */
    function CommentsDirectiveController($scope) {

        /* Загрузка комментариев */
        $scope.load().then(function (comments) {

            // TODO: Вот тут нужно как-то передать, чтоб работало и в родительском конструкторе
            $scope.comments = comments;
        });

    }

})();