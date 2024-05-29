import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsListComponent } from './components/songs/songs-list/songs-list.component';
import { DetailSongComponent } from './components/songs/detail-song/detail-song.component';
import { NewSongComponent } from './components/songs/new-song/new-song.component';
import { EditSongComponent } from './components/songs/edit-song/edit-song.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'songs',
    component: SongsListComponent,
    canActivate: [loginGuard]
  },
  { path: 'songs/new', component: NewSongComponent, canActivate: [loginGuard] },
  { path: 'songs/edit/:songId', component: EditSongComponent, canActivate: [loginGuard] },
  { path: 'songs/:songId', component: DetailSongComponent, canActivate: [loginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
