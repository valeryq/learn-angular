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
        this.articles = articles;
        this.ArticleService = ArticleService;
        this.$mdDialog = $mdDialog;
    }

    /**
     * Показать диалог удаления поста
     *
     * @param event
     * @param article
     */
    ListController.prototype.showConfirmDelete = function (event, article) {

        var self = this;

        var confirm = self.$mdDialog.confirm()
            .title('Удаление')
            .content('Вы действительно хотите удалить пост?')
            .ok('Удалить')
            .cancel('Отменить')
            .targetEvent(event);

        self.$mdDialog.show(confirm).then(function () {
            self.ArticleService.remove(article.id).then(function () {
                self.articles.splice(self.articles.indexOf(article), 1);
            });
        });
    };

})();
