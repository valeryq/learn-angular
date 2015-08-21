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
        this.article.comments = [];
        this.ArticleService = ArticleService;
        this.$state = $state;
    }

    /**
     * Удалить пост
     */
    ShowController.prototype.removeArticle = function () {

        var self = this;

        self.ArticleService.remove(self.article.id).then(function () {
            self.$state.go('article.list');
        });
    };

    /**
     * Получить список комментариев поста
     *
     * @returns {*}
     */
    ShowController.prototype.articleComments = function () {
        return this.ArticleService.comments(this.article.id);
    };

    /**
     * Создание комментария к посту
     *
     * @param comment
     * @returns {*}
     */
    ShowController.prototype.articleCommentsCreate = function (comment) {
        return this.ArticleService.commentsCreate(this.article.id, comment);
    }

})();