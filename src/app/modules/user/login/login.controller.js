(function () {
    'use strict';

    angular
        .module('blog.user')
        .controller('LoginController', LoginController);

    /**
     * Контроллер авторизации пользователя в системе
     *
     * @param Auth
     * @param $state
     *
     * @constructor
     * @ngAnnotate
     */
    function LoginController(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;
    }


    /**
     * Метод авторизации пользователя
     */
    LoginController.prototype.login = function () {
        this.Auth.login();
        this.$state.go('article.list');
    };

})();
