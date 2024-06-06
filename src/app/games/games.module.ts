import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
	declarations: [
		TestComponent,
		GamesComponent
	],
	imports: [
		CommonModule,
		GamesRoutingModule
	]
})
export class GamesModule {}
