export class HomeService {
  constructor($log, $window, $rootScope) {
    'ngInject';
    
    this.$log = $log;
    this.$window = $window;
    this.$rootScope = $rootScope;
    
  }

  getStats() {
    //some logic
  }

  
}
