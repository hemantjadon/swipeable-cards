import { Component,AfterContentInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'md-swipeable-cards',
	template: '<ng-content></ng-content>',
	styles: [
		`
			:host md-card{
				will-change: transform,opacity;
			}
		`
	]
})

export class SwipeableCards implements AfterContentInit{
	ngAfterContentInit(){
		this.setEventlisteners();
	}

	private setEventlisteners() {
		let cards_dom = document.querySelectorAll('md-swipeable-cards md-card');
		let cards = Array.from(cards_dom);

		cards.forEach(() => {

		});
	}
}