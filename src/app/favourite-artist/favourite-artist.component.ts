import { Component, Input, OnChanges } from '@angular/core';
import { Album } from "../types/album.interface";
import { ArtistPercentage } from "../types/artist-percentage.interface";

@Component({
  selector: 'app-favourite-artist',
  templateUrl: './favourite-artist.component.html',
  styleUrls: ['./favourite-artist.component.scss']
})
export class FavouriteArtistComponent implements OnChanges {
  @Input() albums!: Album[] | null;

  favouriteArtist!: string;

  ngOnChanges(): void {
    if (this.albums) {
      this.favouriteArtist = this.getFavouriteArtist(this.albums);
    }
  }

  getFavouriteArtist(albums: Album[]): string {
    console.log('getFavouriteArtist is executing');
    const artistArray: ArtistPercentage[] = []
    // loop through
    albums.forEach((album: Album) => {
      // check if there is an existing genre in the return obj
      if (artistArray.some((obj: ArtistPercentage) => obj.artist === album.artist)) {
        // if so loop through again and find the genre
        artistArray.forEach((anotherObj: ArtistPercentage) => {
          if (anotherObj['artist'] === album.artist) {
            // increase the occurrence value, so
            anotherObj['occurrence']++;
            // change the percentage value
            anotherObj['percentage'] = Math.round((anotherObj['occurrence'] / albums.length) * 100);
          }
        });
      } else {
        // there is no match
        const newArtist: ArtistPercentage = {artist: '', occurrence: 0, percentage: 0};
        // add the key and the occurrence value
        newArtist.artist = album.artist;
        newArtist.occurrence = 1;
        // now add the percentage
        newArtist.percentage = Math.round((1 / albums.length) * 100);
        // now push
        artistArray.push(newArtist);
      }
    });

    // now get the highest value
    return artistArray.length ?
      artistArray.reduce((a, b) => a.occurrence > b.occurrence ? a : b).artist : '';
  }
}
