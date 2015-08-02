/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

import {ChildComponent as Child} from 'child';

@Component({
  selector: 'parent'
})

@View({
  templateUrl: 'views/parent.html',
  directives: [Child]
})

class ParentComponent {
  message: string;
  constructor() {
    this.message = "I'm the parent";
  }
}

bootstrap(ParentComponent);
