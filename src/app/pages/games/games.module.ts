import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		GamesComponent,
		GamesListComponent,
		GameComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		GamesRoutingModule
	]
})
export class GamesModule {}
