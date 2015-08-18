(function () {
    'use strict';

    angular
        .module('blog')
        .controller('CreateController', CreateController);

    /**
     * Class CreateController
     *
     * @param ArticleService
     * @param $location
     *
     * @constructor
     * @ngInject
     */
    function CreateController(ArticleService, $location) {
        this.ArticleService = ArticleService;
        this.$location = $location;
    }

    /**
     * Обработка формы
     */
    CreateController.prototype.processForm = function () {

        var self = this;

        self.ArticleService.create(self.article).then(function () {
            self.$location.path('#/');
        });
    };
    
})();
