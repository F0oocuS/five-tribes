import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameCreatePopupComponent } from './components/game-create-popup/game-create-popup.component';
import { GameTileComponent } from './components/game-tile/game-tile.component';
import { GameLobbyComponent } from './components/game-lobby/game-lobby.component';

@NgModule({
	declarations: [
		GamesComponent,
		GamesListComponent,
		GameComponent,
  GameCreatePopupComponent,
  GameTileComponent,
  GameLobbyComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		GamesRoutingModule
	]
})
export class GamesModule {}
