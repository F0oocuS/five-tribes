import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './shared/components/test/test.component';

const routes: Routes = [
	{ path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule)},
	{ path: 'lobby', component: TestComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
