import { Component, inject, runInInjectionContext } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  usersService = inject(UsersService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.usersService.login(this.formulario.value);
    if (!response.error) {
      localStorage.setItem('token_songs', response.token);
      this.router.navigate(['/songs']);
    }
  }

}
