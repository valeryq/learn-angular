(function () {
    'use strict';

    angular
        .module('blog')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($scope, webSql, $mdDialog) {
        $scope.articles = [];

        /* Выбрать все записи из БД */
        webSql.selectAll('articles').then(function (articles) {
            for (var i = 0; i < articles.rows.length; i++) {
                $scope.articles.push(articles.rows.item(i));
            }
        });


        /**
         * Показать диалог удаления поста
         *
         * @param ev
         * @param article
         */
        $scope.showConfirmDelete = function (ev, article) {
            var confirm = $mdDialog.confirm()
                .title('Удаление')
                .content('Вы действительно хотите удалить пост?')
                .ok('Удалить')
                .cancel('Отменить')
                .targetEvent(ev);

            $mdDialog.show(confirm).then(function () {
                webSql.del('articles', {id: article.id});
                $scope.articles.splice($scope.articles.indexOf(article), 1);
            });
        };
    }
})();
