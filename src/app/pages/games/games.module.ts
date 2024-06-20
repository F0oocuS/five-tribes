import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		GamesListComponent,
		GameComponent,
	],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class GamesModule {}
