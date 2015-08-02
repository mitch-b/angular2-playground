/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

import {FriendsService} from 'FriendsService';

@Component({
  selector: 'display',
  hostInjector: [FriendsService]
})

@View({
  templateUrl: 'views/friends.html',
  directives: [NgFor, NgIf]
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
