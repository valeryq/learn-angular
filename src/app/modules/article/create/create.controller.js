(function () {
    'use strict';

    angular
        .module('blog.article')
        .controller('CreateController', CreateController);

    /**
     * Class CreateController
     *
     * @param article - пост (resolve in routeProvider)
     * @param ArticleService
     * @param $state
     *
     * @constructor
     * @ngInject
     */
    function CreateController(article, ArticleService, $state) {
        this.article = article;
        this.ArticleService = ArticleService;
        this.$state = $state;
    }

    /**
     * Обработка формы
     */
    CreateController.prototype.processForm = function () {

        var self = this;

        self.ArticleService.createOrUpdate(self.article).then(function () {
            self.$state.previous('article.list');
        });
    };

})();
