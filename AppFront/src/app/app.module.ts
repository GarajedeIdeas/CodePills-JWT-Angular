import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsListComponent } from './components/songs/songs-list/songs-list.component';
import { DetailSongComponent } from './components/songs/detail-song/detail-song.component';
import { NewSongComponent } from './components/songs/new-song/new-song.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSongComponent } from './components/songs/edit-song/edit-song.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { MenuComponent } from './components/ui/menu/menu.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    DetailSongComponent,
    NewSongComponent,
    EditSongComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
