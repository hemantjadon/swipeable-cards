import { Component } from '@angular/core';
import { MdCard } from '@angular2-material/card';
import { SwipeableCards } from './swipeable-cards/swipeable-cards';

@Component({
	selector: 'ng-app',
	template: 
	`<md-swipeable-cards>
		<md-card>
			<md-card-title> Card 1 </md-card-title>
			<md-card-content>
				<p>This is supporting text.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
			</md-card-content>
		</md-card>
		<md-card>
			<md-card-title> Card 2 </md-card-title>
			<md-card-content>
				<p>This is supporting text.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
			</md-card-content>
		</md-card>
		<md-card>
			<md-card-title> Card 3 </md-card-title>
			<md-card-content>
				<p>This is supporting text.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
			</md-card-content>
		</md-card>
		<md-card>
			<md-card-title> Card 4 </md-card-title>
			<md-card-content>
				<p>This is supporting text.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
			</md-card-content>
		</md-card>
		<md-card>
			<md-card-title> Card 5 </md-card-title>
			<md-card-content>
				<p>This is supporting text.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
			</md-card-content>
		</md-card>
	</md-swipeable-cards>`,
	styles:[`
		md-card{
			margin:20px;
		}
	`],
	directives: [SwipeableCards,MdCard]
})
export class App{}
