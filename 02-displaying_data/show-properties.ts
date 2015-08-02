/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

class FriendsService {
  names: Array<string>;
  constructor() {
    this.names = ["Alice", "Arav", "Martin", "Shannon", "Ariana", "Kai"];
  }
}


@Component({
  selector: 'display',
  appInjector: [FriendsService]
})

@View({
  template: `
    <p>My name: {{myName}}</p>
    <p>Friends: <span *ng-if="names.length > 3"> (so many!)</span></p>
    <ul>
      <li *ng-for="#name of names">
        {{name}}
      </li>
    </ul>
  `
  ,directives: [NgFor, NgIf]
  })

class DisplayContent {
  myName: string;
  names: Array<string>;

  constructor(friendsService: FriendsService) {
    this.myName = "Alice";
    this.names = friendsService.names;
  }
}


bootstrap(DisplayContent);
