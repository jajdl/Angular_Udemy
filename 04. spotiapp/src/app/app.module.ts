import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';

//importar rutas
import {ROUTES} from './app.routes'; //este en caso de que los demas no funcionen

//otros
import {HttpClientModule} from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';

//pipes
import { NoimagePipe } from './pipes/noimage.pipe';
      
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {ROUTES}
