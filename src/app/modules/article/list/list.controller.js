(function () {
    'use strict';

    angular
        .module('blog')
        .controller('ListController', ListController);

    /**
     * Class ListController
     *
     * @param articles - посты (resolve in routeProvider)
     * @param ArticleService
     * @param $mdDialog
     *
     * @constructor
     * @ngInject
     */
    function ListController(articles, ArticleService, $mdDialog) {

        var vm = this;

        vm.articles = articles;
        vm.showConfirmDelete = showConfirmDelete;

        /**
         * Показать диалог удаления поста
         *
         * @param event
         * @param article
         */
        function showConfirmDelete(event, article) {
            var confirm = $mdDialog.confirm()
                .title('Удаление')
                .content('Вы действительно хотите удалить пост?')
                .ok('Удалить')
                .cancel('Отменить')
                .targetEvent(event);

            $mdDialog.show(confirm).then(function () {
                ArticleService.remove(article.id).then(function () {
                    vm.articles.splice(vm.articles.indexOf(article), 1);
                });
            });
        }
    }
})();
