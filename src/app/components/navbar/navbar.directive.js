(function () {
    'use strict';

    angular
        .module('blog')
        .directive('navbar', navbarDirective);

    /** @ngInject */
    function navbarDirective() {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'navbar'
        };
    }

    /**
     * Контроллер директивы хедера
     *
     * @param Auth
     * @param $state
     *
     * @constructor
     * @ngInject
     */
    function NavbarController(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;
    }

    /**
     * Проверка авторизован ли пользователь
     *
     * @returns {boolean|*}
     */
    NavbarController.prototype.checkLogin = function () {
        return this.Auth.check();
    };

    /**
     * Метод разлогина
     */
    NavbarController.prototype.logout = function () {
        this.$state.go('user.logout');
    };

})();
