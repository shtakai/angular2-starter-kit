// import styles for bundling only on the browser
if (process.env.BROWSER_ENV) {
  require('./../styles/importer.less');
}

import {
  Component,
  ElementRef,
} from 'angular2/core';
import {
  Router,
  RouteConfig,
  ROUTER_DIRECTIVES,
} from 'angular2/router';
import {Home} from './pages/home/home.component';

@Component({
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES,
  ],
  providers: [
  ],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  // main page
  { path: '/',   name: 'Home', component: Home, useAsDefault: true },
  // default route
  { path: '/**', name: 'Root', redirectTo: ['/Home'] },

])
export class App {

  constructor(router: Router, appElement: ElementRef) {

    // scroll to top of the page after route change
    router.subscribe(() => {
      const bodyElement: HTMLElement = appElement.nativeElement.parentElement;
      if (bodyElement && bodyElement.scrollTop > 0) {
        bodyElement.scrollTop = 0;
      }
    });
  }
}
