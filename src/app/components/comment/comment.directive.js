(function () {
    'use strict';

    angular
        .module('blog')
        .directive('comments', CommentsDirective);

    function CommentsDirective() {
        var directive = {
            restrict: 'E',
            scope: {
                comments: '=items',
                load: '&',
                create: '&'
            },
            controller: CommentsDirectiveController,
            controllerAs: 'vm',
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

        this.$scope = $scope;

        /* Загрузка комментариев */
        $scope.load().then(function (comments) {
            $scope.comments = comments;
        });

    }

    /**
     * Создание комментария
     */
    CommentsDirectiveController.prototype.create = function () {

        var self = this;

        self.$scope.create({comment: self.comment}).then(function (data) {
            self.$scope.comments.push(angular.copy(self.comment));
        });

    }

})();