import { runBlock } from './index.run';
import { NavbarDirective } from './directives/navbar.directive';
import { HomeService } from './services/home.service';
import { HomeController } from './controllers/home.controller';

angular.module('dummy-app', [])
  .service('homeService', HomeService)
  .directive('mainNavbar', NavbarDirective)
  .controller('homeController', HomeController)
  .run(runBlock);
