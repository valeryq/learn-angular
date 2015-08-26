(function () {
    'use strict';

    angular
        .module('blog.user')
        .controller('LogoutController', LogoutController);

    /** @ngAnnotate */
    function LogoutController($sessionStorage, $state, $scope) {
        $sessionStorage.auth = false;
        $state.go('article.list');
    }

})();
