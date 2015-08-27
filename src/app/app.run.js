(function () {
    'use strict';

    angular
        .module('blog')
        .run(run);

    /** @ngInject */
    function run($rootScope, $state, Auth) {

        /* Следим за началом смены состояний роутинга */
        $rootScope.$on('$stateChangeStart', function (event, state) {

            /* Если роут доступен только для авторизованных и пользователь не авторизован */
            if ((state.auth !== undefined && state.auth) && !Auth.check()) {
                event.preventDefault();
                $state.go('user.login');
            }

            /* Если роут недоступен для авторизованых пользователей, то перебрасываем на 404 */
            if ((state.auth !== undefined && !state.auth) && Auth.check()) {
                event.preventDefault();
                $state.go('404');
            }

        });

        /* Следим за успешной сменой состояний роутинга */
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {

            /**
             * Переход на предыдущее состояние
             * или по дефолту, если предыдущего состояния не существует
             *
             * @param state_name - имя дефолтного состояния
             * @param state_params - параметры дефолтного состояния
             */
            $state.previous = function (state_name, state_params) {
                /* Если существует предыдущее состояние, то перейти по нему */
                if (fromState.name) {
                    $state.go(fromState.name, toParams);
                } else {
                    $state.go(state_name, state_params);
                }
            };

        });
    }

})();
