import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './core/services/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		AuthGuard,
		AuthService,
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
