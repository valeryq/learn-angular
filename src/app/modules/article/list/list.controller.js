(function () {
    'use strict';

    angular
        .module('blog')
        .controller('ListController', ListController);

    /**
     * Class ListController
     *
     * @param ArticleService
     * @param $mdDialog
     * @constructor
     */
    function ListController(ArticleService, $mdDialog) {

        var vm = this;

        vm.articles = [];
        vm.showConfirmDelete = showConfirmDelete;

        /**
         * Получить все записи из БД
         */
        ArticleService.getList().then(function (articles) {
            vm.articles = articles;
        });


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
                ArticleService.delete(article.id).then(function () {
                    vm.articles.splice(vm.articles.indexOf(article), 1);
                });
            });
        }
    }
})();
