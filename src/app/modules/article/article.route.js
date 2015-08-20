(function () {
    'use strict';

    angular
        .module('blog.article')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('article', {
                abstract: true,
                url: '/article'
            })
            .state('article.list', {
                url: '/list',
                templateUrl: 'app/modules/article/list/list.html',
                controller: 'ListController',
                controllerAs: 'vm',
                resolve: {
                    articles: articlesList
                }
            })
            .state('article.create', {
                url: '/create',
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'CreateController',
                controllerAs: 'vm',
                resolve: {
                    article: function () {
                        return {};
                    }
                }
            })
            .state('article.edit', {
                url: '/edit/:id',
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'CreateController',
                controllerAs: 'vm',
                resolve: {
                    article: findArticle
                }
            });
    }

    /**
     * Получить промис списка постов
     *
     * @param ArticleService
     * @returns {*}
     *
     * @ngInject
     */
    function articlesList(ArticleService) {
        return ArticleService.getList();
    }

    /**
     * Получить промис поиска одного поста
     *
     * @param $route
     * @param ArticleService
     * @returns {*}
     *
     * @ngInject
     */
    function findArticle($route, ArticleService) {
        return ArticleService.find($route.current.params.id);
    }

})();
