import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'display'
  })

@View({
  template: `
    <p>My name: {{myName}}</p>
    <p>Friends:</p>
    <ul>
      <li *ng-for="#name of names">
        {{name}}
      </li>
    </ul>
  `
  ,directives: [NgFor]
  })

class DisplayContent {
  myName: string;
  names: Array<string>; 

  constructor() {
    this.myName = "Alice";
    this.names = ["Arav", "Martin", "Shannon", "Ariana", "Kai"];
  }
}

bootstrap(DisplayContent);
