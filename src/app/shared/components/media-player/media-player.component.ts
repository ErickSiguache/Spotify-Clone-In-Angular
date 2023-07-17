import { Component } from '@angular/core';
import { Song } from '@shared/interfaces/song.interce';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: Song = {
    cover: 'https://johnfergusonsmart.com/wp-content/uploads/2018/12/play-button-png-play-video-button-png-321.png',
    name: 'Drive Licence',
    album: 'Olivia Rodrigo',
  }

  constructor(){}
}
