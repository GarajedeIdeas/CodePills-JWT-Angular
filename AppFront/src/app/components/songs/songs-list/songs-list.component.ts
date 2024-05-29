import { Component, inject, signal } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent {

  arrSongs = signal<any[]>([]);

  songsService = inject(SongsService);

  async ngOnInit() {
    const songs = await this.songsService.getAll();
    this.arrSongs.set(songs);
  }

  async onClickBorrar(songId: string) {
    const song = await this.songsService.deleteById(songId);
    console.log(song);

    if (!song.error) {
      const songs = await this.songsService.getAll();
      this.arrSongs.set(songs);
    } else {
      console.log(song.error);
    }
  }

}
