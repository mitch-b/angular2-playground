/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'child'
})

@View({
  templateUrl: 'views/child.html'
})

export class ChildComponent {
  message: string;
  constructor() {
    this.message = "I'm the child";
  }
}
