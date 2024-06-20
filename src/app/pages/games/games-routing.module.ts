import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../../games/games.component';
import { GamesListComponent } from '../../games/components/games-list/games-list.component';
import { GameComponent } from '../../games/components/game/game.component';

const routes: Routes = [
	{
		path: '',
		component: GamesComponent,
		children: [
			{ path: '', component: GamesListComponent },
			{ path: ':id', component: GameComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class GamesRoutingModule {}
