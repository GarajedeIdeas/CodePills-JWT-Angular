import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.css']
})
export class DetailSongComponent {

  activatedRoute = inject(ActivatedRoute);
  songsService = inject(SongsService);

  song = signal<any>({});

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const song = await this.songsService.getById(params['songId']);
      this.song.set(song);
    });
  }

}
