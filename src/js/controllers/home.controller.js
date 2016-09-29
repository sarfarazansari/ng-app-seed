export class HomeController {

  constructor($log, homeService, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.query = undefined;
    this.requesting = false;
    this.userEmail = undefined;
    this.homeService = homeService;
    this.$log.debug("in home");
    
  }

  getStats(){
    this.homeService.getStats()
      .then((data) => {
        //logic
      }, (error) => {
        this.$log.error("Error while requesting", error);
      });
  }

}
