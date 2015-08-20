(function () {
    'use strict';

    angular
        .module('blog.article')
        .controller('ShowController', ShowController);

    /**
     * Контроллер просмотра поста
     *
     * @param article
     * @param ArticleService
     * @param $state
     *
     * @constructor
     * @ngInject
     */
    function ShowController(article, ArticleService, $state) {
        this.article = article;
        this.ArticleService = ArticleService;
        this.$state = $state;
    }

    /**
     * Удалить пост
     *
     * @param article
     */
    ShowController.prototype.removeArticle = function (article) {

        var self = this;

        self.ArticleService.remove(article.id).then(function () {
            self.$state.go('article.list');
        });
    };

})();