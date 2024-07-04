import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games.component';
import { GameComponent } from './components/game/game.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameLobbyComponent } from './components/game-lobby/game-lobby.component';

const routes: Routes = [
	{
		path: '',
		component: GamesComponent,
		children: [
			{ path: '', component: GamesListComponent },
			{ path: ':id', component: GameComponent },
			{ path: ':id/lobby', component: GameLobbyComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class GamesRoutingModule {}
