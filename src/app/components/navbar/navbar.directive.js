(function () {
    'use strict';

    angular
        .module('blog')
        .directive('navbar', navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'navbar'
        };

        return directive;

        /** @ngInject */
        function NavbarController($sessionStorage, $scope) {
            this.$sessionStorage = $sessionStorage;
            this.$scope = $scope;
        }

        /**
         * Метод разлогина
         */
        NavbarController.prototype.logout = function () {
            console.log('logout');
            this.$scope.$emit('user.logout');
        };
    }

})();
