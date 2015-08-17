(function () {
    'use strict';

    angular
        .module('blog')
        .controller('ListController', ListController);

    /**
     * Class ListController
     *
     * @param $scope
     * @param ArticleRepository
     * @param $mdDialog
     * @constructor
     */
    function ListController($scope, ArticleRepository, $mdDialog) {
        $scope.articles = [];

        /**
         * Получить все записи из БД
         */
        ArticleRepository.all(function (articles) {
            $scope.articles = articles;
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
                ArticleRepository.delete(article.id, function () {
                    $scope.articles.splice($scope.articles.indexOf(article), 1);
                });
            });
        };
    }
})();
