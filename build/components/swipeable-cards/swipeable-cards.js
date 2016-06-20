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
        this.target = null;
        this.targetBCR = null;
        this.startX = 0;
        this.currentX = 0;
        this.targetX = 0;
        this.moveX = 0;
        this.is_dragging = false;
        this.onStart.bind(this);
        this.onMove.bind(this);
        this.onEnd.bind(this);
        this.update.bind(this);
    }
    SwipeableCards.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.setEventlisteners();
        window.requestAnimationFrame(function () { _this.update(); });
    };
    SwipeableCards.prototype.setEventlisteners = function () {
        var _this = this;
        var cards_elem_array = document.querySelectorAll('md-swipeable-cards md-card');
        var cards = Array.from(cards_elem_array);
        cards.forEach(function (card) {
            card.addEventListener('touchstart', function (evt) { _this.onStart(evt, card); });
            card.addEventListener('touchmove', function (evt) { _this.onMove(evt); });
            card.addEventListener('touchend', function (evt) { _this.onEnd(evt); });
            card.addEventListener('mousedown', function (evt) { _this.onStart(evt, card); });
            card.addEventListener('mousemove', function (evt) { _this.onMove(evt); });
            card.addEventListener('mouseup', function (evt) { _this.onEnd(evt); });
        });
    };
    SwipeableCards.prototype.onStart = function ($event, card) {
        this.target = card;
        this.targetBCR = this.target.getBoundingClientRect();
        this.is_dragging = true;
        this.startX = $event.pageX || $event.touches[0].pageX;
        this.currentX = this.startX;
        this.targetX = 0;
        this.target.style.willChange = 'transform,opacity';
        $event.preventDefault();
    };
    SwipeableCards.prototype.onMove = function ($event) {
        if (!this.target) {
            return;
        }
        this.currentX = $event.pageX || $event.touches[0].pageX;
    };
    SwipeableCards.prototype.onEnd = function ($event) {
        if (!this.target) {
            return;
        }
        if (Math.abs(this.moveX) > this.targetBCR.width * 0.35) {
            this.targetX = (this.moveX > 0) ? this.targetBCR.width : -this.targetBCR.width;
        }
        this.is_dragging = false;
    };
    SwipeableCards.prototype.update = function () {
        var _this = this;
        window.requestAnimationFrame(function () { _this.update(); });
        if (!this.target) {
            return;
        }
        if (this.is_dragging) {
            this.moveX = this.currentX - this.startX;
        }
        else {
            this.moveX += (this.targetX - this.moveX) / 4;
        }
        var normalizedDragDistance = Math.abs(this.moveX / this.targetBCR.width);
        var opacity = 1 - Math.pow(normalizedDragDistance, 3);
        this.target.style.transform = "translateX(" + this.moveX + "px)";
        this.target.style.opacity = opacity;
    };
    SwipeableCards = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-swipeable-cards',
            template: '<ng-content></ng-content>',
        }), 
        __metadata('design:paramtypes', [])
    ], SwipeableCards);
    return SwipeableCards;
}());
exports.SwipeableCards = SwipeableCards;
