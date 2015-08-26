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
                create: '&'
            },
            controller: CommentsDirectiveController,
            controllerAs: 'commentList',
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

    }

    /**
     * Создание комментария
     */
    CommentsDirectiveController.prototype.create = function ($event) {

        var self = this;

        self.$scope.create({comment: self.comment});

        self.$scope.comment__create.$setUntouched();

        delete self.comment;
    }

})();