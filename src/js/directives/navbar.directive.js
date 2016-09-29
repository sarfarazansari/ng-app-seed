export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    templateUrl: '/public/directives/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
}



class NavbarController {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
  }  
}
