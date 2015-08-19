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
     * @param $location
     *
     * @constructor
     * @ngInject
     */
    function CreateController(article, ArticleService, $location) {
        this.article = article;
        this.ArticleService = ArticleService;
        this.$location = $location;
    }

    /**
     * Обработка формы
     */
    CreateController.prototype.processForm = function () {

        var self = this;

        self.ArticleService.createOrUpdate(self.article).then(function () {
            self.$location.path('#/');
        });
    };

})();
