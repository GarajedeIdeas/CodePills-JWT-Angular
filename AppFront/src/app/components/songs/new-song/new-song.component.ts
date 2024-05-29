import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})
export class NewSongComponent {

  formulario: FormGroup;

  songsService = inject(SongsService);

  constructor() {
    this.formulario = new FormGroup({
      title: new FormControl(),
      artist: new FormControl(),
      genre: new FormControl(),
      album: new FormControl(),
      duration: new FormControl(),
      year: new FormControl(),
      trackNumber: new FormControl(),
      isExplicit: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.songsService.create(this.formulario.value);
    console.log(response);
  }

}
