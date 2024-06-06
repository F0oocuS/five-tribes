import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameComponent } from './components/game/game.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';

@NgModule({
	declarations: [
		TestComponent,
		GamesComponent,
		GameComponent,
		GamesListComponent,
		GameCardComponent
	],
	imports: [
		CommonModule,
		GamesRoutingModule
	]
})
export class GamesModule {
}
