import {Component} from 'angular2/core';

@Component({
  selector: 'download-section',
  directives: [
  ],
  template: `
    <div class="col-xs-12 text-center">
      <a class="btn full puffy" href="https://github.com/pmachowski/angular2-starter-kit/archive/master.zip">Download</a>

      <h5 class="brand-color-2 padtop2"><strong>Downloading this boilerplate will boost your productivity.</strong></h5>
    </div>
  `
})
export class DownloadSection {}
