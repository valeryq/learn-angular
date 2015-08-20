(function () {
    'use strict';

    angular
        .module('blog')
        .run(run);

    /** @ngInject */
    function run($rootScope, $state) {

        /* Следим за сменой состояний роутинга */
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
