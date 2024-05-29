import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  router = inject(Router);
  usersService = inject(UsersService);

  onClickLogout() {
    localStorage.removeItem('token_songs');
    this.router.navigate(['/login']);
  }

}
