(function () {
    'use strict';

    angular
        .module('blog')
        .controller('EditController', EditController);

    /**
     * Class EditController
     *
     * @param article - пост (resolve in routeProvider)
     * @param ArticleService
     * @param $location
     *
     * @constructor
     * @ngInject
     */
    function EditController(article, ArticleService, $location) {
        this.article = article;
        this.ArticleService = ArticleService;
        this.$location = $location;
    }

    /**
     * Обработка формы (обновление поста)
     */
    EditController.prototype.processForm = function () {

        var self = this;

        self.ArticleService.update(self.article.id, self.article).then(function () {
            self.$location.path('#/');
        });
    };

})();