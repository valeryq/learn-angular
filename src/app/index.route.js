(function () {
    'use strict';

    angular
        .module('blog')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'app/modules/article/list/list.html',
                controller: 'ListController',
                controllerAs: 'vm',
                resolve: {
                    articles: articlesList
                }
            })
            .when('/create', {
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'CreateController',
                controllerAs: 'vm'
            })
            .when('/edit/:id', {
                templateUrl: 'app/modules/article/create/create.html',
                controller: 'EditController',
                controllerAs: 'vm',
                resolve: {
                    article: findArticle
                }
            })
            .otherwise({
                redirectTo: '/list'
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
