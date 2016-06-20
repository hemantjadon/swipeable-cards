import { Component,AfterContentInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'md-swipeable-cards',
	template: '<ng-content></ng-content>',
})

export class SwipeableCards implements AfterContentInit{
	constructor() {
		this.onStart.bind(this);
		this.onMove.bind(this);
		this.onEnd.bind(this);
		this.update.bind(this);
	}
	ngAfterContentInit(){
		this.setEventlisteners();
		window.requestAnimationFrame(()=>{ this.update(); });
	}

	private target = null;

	private targetBCR = null;

	private startX : number = 0;

	private currentX : number = 0;

	private targetX : number = 0;

	private moveX : number = 0;

	private is_dragging : boolean = false;

	private setEventlisteners() {
		let cards_elem_array = document.querySelectorAll('md-swipeable-cards md-card');
		let cards = Array.from(cards_elem_array);

		cards.forEach((card) => {
			card.addEventListener('touchstart', (evt) => { this.onStart(evt,card) });
			card.addEventListener('touchmove', (evt) => { this.onMove(evt) });
			card.addEventListener('touchend', (evt) => { this.onEnd(evt) });

			card.addEventListener('mousedown', (evt) => { this.onStart(evt,card) });
			card.addEventListener('mousemove', (evt) => { this.onMove(evt) });
			card.addEventListener('mouseup', (evt) => { this.onEnd(evt) });
		});
	}

	private onStart ($event,card) {
		this.target = card;
		this.targetBCR = this.target.getBoundingClientRect();

		this.is_dragging = true;
		this.startX = $event.pageX || $event.touches[0].pageX;
		this.currentX = this.startX;
		this.targetX = 0;

		this.target.style.willChange = 'transform,opacity'

		$event.preventDefault();
	}

	private onMove ($event) {
		if (!this.target) { return ; }

		this.currentX = $event.pageX || $event.touches[0].pageX;
	}

	private onEnd ($event) {
		if (!this.target) { return ; }

		if (Math.abs(this.moveX) > this.targetBCR.width * 0.35) {
			this.targetX = (this.moveX > 0) ? this.targetBCR.width : -this.targetBCR.width;
		}

		this.is_dragging = false;
	}

	public update() {
		window.requestAnimationFrame(()=>{ this.update(); });

		if (!this.target) { return ; }

		if (this.is_dragging){
			this.moveX = this.currentX - this.startX;
		}
		else {
			this.moveX += (this.targetX - this.moveX)/4;
		}

		const normalizedDragDistance = Math.abs(this.moveX/this.targetBCR.width);
		const opacity = 1 - Math.pow(normalizedDragDistance,3);

		this.target.style.transform = `translateX(${this.moveX}px)`;
		this.target.style.opacity = opacity;
	}
}