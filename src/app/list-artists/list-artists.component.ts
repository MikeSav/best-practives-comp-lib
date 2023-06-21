import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Album } from "../types/album.interface";
import { ArtistList } from "../types/artist-list.interface";

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.scss']
})
export class ListArtistsComponent implements OnChanges {
  @Input() albums!: Album[] | null;

  artistList!: ArtistList[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(this.albums) {
      this.artistList = this.getExclusiveArtists(this.albums);
    }
  }

  getExclusiveArtists(albums: Album[]): ArtistList[] {
    console.log('getExclusiveArtists is executing');
    return [...new Set(albums?.map((album: Album) => album.artist))].map((artist: string) => {
      return ({
        artist,
        chipColour: this.getRandomChipStyle()
      });
    });
  }

  getRandomChipStyle(): string {
    const styles: string [] = ['s', 'e', 'a', 'w', 't', 'n'];
    return styles[Math.floor(Math.random() * styles.length)];
  }

  trackByFn(index: number): number {
    // we pass index or
    return index;
  }
}
