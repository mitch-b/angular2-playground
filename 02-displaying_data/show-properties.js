/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var FriendsService = (function () {
    function FriendsService() {
        this.names = ["Alice", "Arav", "Martin", "Shannon", "Ariana", "Kai"];
    }
    return FriendsService;
})();
var DisplayContent = (function () {
    function DisplayContent(friendsService) {
        this.myName = "Alice";
        this.names = friendsService.names;
    }
    DisplayContent = __decorate([
        angular2_1.Component({
            selector: 'display',
            hostInjector: [FriendsService]
        }),
        angular2_1.View({
            template: "\n    <p>My name: {{myName}}</p>\n    <p>Friends: <span *ng-if=\"names.length > 3\"> (so many!)</span></p>\n    <ul>\n      <li *ng-for=\"#name of names\">\n        {{name}}\n      </li>\n    </ul>\n  ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [FriendsService])
    ], DisplayContent);
    return DisplayContent;
})();
angular2_1.bootstrap(DisplayContent);
