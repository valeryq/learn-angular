(function () {
    'use strict';

    angular
        .module('blog.user')
        .controller('LogoutController', LogoutController);

    /**
     * Контроллер выхода пользователя из системы
     *
     * @param Auth
     * @param $state
     *
     * @constructor
     * @ngAnnotate
     */
    function LogoutController(Auth, $state) {
        Auth.logout();
        $state.go('article.list');
    }

})();
