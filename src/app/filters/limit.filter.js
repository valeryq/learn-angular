(function () {
    'use strict';

    angular
        .module('blog')
        .filter('limit', LimitFilter);


    /**
     * Лимит строки по кол-ву символов
     *
     * @param $filter
     * @returns {Function}
     *
     * @constructor
     * @ngInject
     */
    function LimitFilter($filter) {
        return function (input, limit) {
            if (!input) return;

            if (input.length <= limit) {
                return input;
            }

            return $filter('limitTo')(input, limit) + '...';
        }
    }

})();