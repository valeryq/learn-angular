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
     */
    ShowController.prototype.removeArticle = function () {

        var self = this;

        self.ArticleService.remove(self.article.id).then(function () {
            self.$state.go('article.list');
        });
    };


    /**
     * Создание комментария к посту
     *
     * @param comment
     * @returns {*}
     */
    ShowController.prototype.articleCommentsCreate = function (comment) {

        var self = this;

        self.ArticleService.commentsCreate(this.article.id, comment).then(function () {
            self.article.comments.push(comment);
        });
    }

})();