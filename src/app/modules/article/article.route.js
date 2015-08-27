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
                template: '<ui-view />',
                url: '/article'
            })
            .state('article.list', {
                url: '/list',
                templateUrl: 'app/modules/article/list/list.html',
                controller: 'ListController',
                controllerAs: 'listArticle',
                resolve: {
                    articles: articlesList
                },
                auth: true
            })
            .state('article.create', {
                url: '/create',
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'CreateController',
                controllerAs: 'createArticle',
                resolve: {
                    article: function () {
                        return {};
                    }
                },
                auth: true
            })
            .state('article.edit', {
                url: '/edit/:id',
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'CreateController',
                controllerAs: 'createArticle',
                resolve: {
                    article: findArticle
                },
                auth: true
            })
            .state('article.show', {
                url: '/show/:id',
                templateUrl: 'app/modules/article/show/show.html',
                controller: 'ShowController',
                controllerAs: 'showArticle',
                resolve: {
                    article: findArticleWithComments
                },
                auth: true
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
     * @param $stateParams
     * @param ArticleService
     * @returns {*}
     *
     * @ngInject
     */
    function findArticle($stateParams, ArticleService) {
        return ArticleService.find($stateParams.id);
    }

    /**
     * Получить промис поиска одного поста с комментариями
     *
     * @param $stateParams
     * @param ArticleService
     * @returns {*}
     *
     * @ngInject
     */
    function findArticleWithComments($stateParams, ArticleService) {
        /* Загружаем пост */
        return ArticleService.find($stateParams.id).then(function (article) {
            /* Загружаем комментарии поста */
            return ArticleService.comments(article.id).then(function (comments) {
                article.comments = comments;

                return article;
            });
        });
    }


})();
