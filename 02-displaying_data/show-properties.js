/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', 'FriendsService'], function (require, exports, angular2_1, FriendsService_1) {
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
            })
        ], DisplayContent);
        return DisplayContent;
    })();
    angular2_1.bootstrap(DisplayContent);
});
//# sourceMappingURL=show-properties.js.map