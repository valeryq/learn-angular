(function () {
    'use strict';

    angular
        .module('blog.user')
        .service('Auth', AuthService);


    /** @ngInject */
    function AuthService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }

    /**
     * Проверяет авторизован ли пользователь
     *
     * @returns {boolean|*}
     */
    AuthService.prototype.check = function () {
        return this.$sessionStorage.auth;
    };

    /**
     * Авторизация пользователя в системе
     */
    AuthService.prototype.login = function () {
        this.$sessionStorage.auth = true;
    };

    /**
     * Выход пользователя из системы
     */
    AuthService.prototype.logout = function () {
        this.$sessionStorage.auth = false;
    };

})();