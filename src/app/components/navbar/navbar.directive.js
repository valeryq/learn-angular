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

    /** @ngInject */
    function NavbarController($sessionStorage, $state) {
        this.$sessionStorage = $sessionStorage;
        this.$state = $state;
    }

    /**
     * Метод разлогина
     */
    NavbarController.prototype.logout = function () {
        this.$state.go('user.logout');
    };

})();
