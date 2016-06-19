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
var card_1 = require('@angular2-material/card');
var swipeable_cards_1 = require('./swipeable-cards/swipeable-cards');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'ng-app',
            template: "<md-swipeable-cards>\n\t\t<md-card>\n\t\t\t<md-card-title> Card 1 </md-card-title>\n\t\t\t<md-card-content>\n\t\t\t\t<p>This is supporting text.</p>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<md-card>\n\t\t\t<md-card-title> Card 2 </md-card-title>\n\t\t\t<md-card-content>\n\t\t\t\t<p>This is supporting text.</p>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<md-card>\n\t\t\t<md-card-title> Card 3 </md-card-title>\n\t\t\t<md-card-content>\n\t\t\t\t<p>This is supporting text.</p>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<md-card>\n\t\t\t<md-card-title> Card 4 </md-card-title>\n\t\t\t<md-card-content>\n\t\t\t\t<p>This is supporting text.</p>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t\t<md-card>\n\t\t\t<md-card-title> Card 5 </md-card-title>\n\t\t\t<md-card-content>\n\t\t\t\t<p>This is supporting text.</p>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t</md-swipeable-cards>",
            styles: ["\n\t\tmd-card{\n\t\t\tmargin:20px;\n\t\t}\n\t"],
            directives: [swipeable_cards_1.SwipeableCards, card_1.MdCard]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
