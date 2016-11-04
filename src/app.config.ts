import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
import IStateProvider = angular.ui.IStateProvider;

export function appConfig($urlRouterProvider: IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider, tagsInputConfigProvider) {
  $stateProvider.state({name: 'root', url: '/', template: '<app></app>'});

  $urlRouterProvider.otherwise('/');

  tagsInputConfigProvider
    .setDefaults('tagsInput', {
      placeholder: 'Search tags',
      addFromAutocompleteOnly: true
    })
    .setDefaults('autoComplete', {
      minLength: 1
    })
}
appConfig.$inject = ['$urlRouterProvider', '$stateProvider', 'tagsInputConfigProvider'];
