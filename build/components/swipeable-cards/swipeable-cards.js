"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SwipeableCards = (function () {
    function SwipeableCards() {
    }
    SwipeableCards.prototype.ngAfterContentInit = function () {
        this.setEventlisteners();
    };
    SwipeableCards.prototype.setEventlisteners = function () {
        var cards_dom = document.querySelectorAll('md-swipeable-cards md-card');
        var cards = Array.from(cards_dom);
        cards.forEach(function () {
        });
    };
    SwipeableCards = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-swipeable-cards',
            template: '<ng-content></ng-content>',
            styles: [
                "\n\t\t\t:host md-card{\n\t\t\t\twill-change: transform,opacity;\n\t\t\t}\n\t\t"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SwipeableCards);
    return SwipeableCards;
}());
exports.SwipeableCards = SwipeableCards;
