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
var FriendsService_1 = require('FriendsService');
var DisplayContent = (function () {
    function DisplayContent(friendsService) {
        this.myName = "Alice";
        this.names = friendsService.names;
    }
    DisplayContent = __decorate([
        angular2_1.Component({
            selector: 'display',
            hostInjector: [FriendsService_1.FriendsService]
        }),
        angular2_1.View({
            templateUrl: 'views/friends.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof FriendsService_1.FriendsService !== 'undefined' && FriendsService_1.FriendsService) === 'function' && _a) || Object])
    ], DisplayContent);
    return DisplayContent;
    var _a;
})();
angular2_1.bootstrap(DisplayContent);
