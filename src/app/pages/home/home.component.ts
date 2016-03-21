import {Component} from 'angular2/core';
import {Header} from '../../shared/components/header/header.component';
import {Footer} from '../../shared/components/footer/footer.component';
import {Tagline} from './components/tagline.component';
import {DownloadSection} from './components/downloadSection.component';

@Component({
  selector: 'home',
  directives: [
    Header,
    Footer,
    Tagline,
    DownloadSection,
  ],
  template: require('./home.template.html')
})
export class Home {}
