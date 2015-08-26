(function () {
    'use strict';

    angular
        .module('blog.user')
        .controller('LoginController', LoginController);

    /** @ngAnnotate */
    function LoginController($sessionStorage, $state) {
        this.$sessionStorage = $sessionStorage;
        this.$state = $state;
    }


    /**
     * Метод авторизации пользователя
     */
    LoginController.prototype.login = function () {
        this.$sessionStorage.auth = true;
        this.$state.go('article.list');
    };

})();
