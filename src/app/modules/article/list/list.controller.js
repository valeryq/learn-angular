(function () {
    'use strict';

    angular
        .module('blog.article')
        .controller('ListController', ListController);

    /**
     * Class ListController
     *
     * @param articles - посты (resolve in routeProvider)
     * @param ArticleService
     *
     * @constructor
     * @ngInject
     */
    function ListController(articles, ArticleService) {
        this.articles = articles;
        this.ArticleService = ArticleService;
    }

    /**
     * Удалить пост
     *
     * @param article
     */
    ListController.prototype.removeArticle = function (article) {

        var self = this;

        self.ArticleService.remove(article.id).then(function () {
            self.articles.splice(self.articles.indexOf(article), 1);
        });
    };

})();
