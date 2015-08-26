(function () {
    'use strict';

    angular
        .module('blog.user')
        .controller('LogoutController', LogoutController);

    /** @ngAnnotate */
    function LogoutController($sessionStorage, $state, $scope) {
        this.$sessionStorage = $sessionStorage;
        this.$state = $state;

        $scope.$on('user.logout', function (event, args) {
            console.log(event);
        });
    }


    /**
     * Метод авторизации пользователя
     */
    LogoutController.prototype.logout = function () {
        this.$sessionStorage.auth = true;
        this.$state.go('article.list');
    };

})();
