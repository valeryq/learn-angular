(function () {
  'use strict';

  angular
    .module('blog.article')
    .directive('articleConfirmDelete', ArticleConfirmDeleteDirective);


  /**
   * Директива для confirm-диалога удаления поста
   *
   * @constructor
   * @ngInject
   */
  function ArticleConfirmDeleteDirective($mdDialog) {
    return {
      priority: 1,
      scope: {
        callback: '&articleConfirmDelete'
      },
      link: ArticleConfirmDeleteDirectiveLink
    };

    function ArticleConfirmDeleteDirectiveLink(scope, element, attr) {

      var clickAction = attr.articleConfirmDelete;

      /* Регистрируем ивент для клика по директиве */
      element.bind('click', function (event) {
        var confirm = $mdDialog.confirm()
          .title('Удаление')
          .content('Вы действительно хотите удалить пост?')
          .ok('Удалить')
          .cancel('Отменить')
          .targetEvent(event);

        $mdDialog.show(confirm).then(function () {
          scope.callback();
        });
      });
    }
  }

})();
