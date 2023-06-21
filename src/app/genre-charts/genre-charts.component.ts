import { Component, Input, OnChanges } from '@angular/core';
import { Album } from "../types/album.interface";
import { GenrePercentage } from "../types/genre-percentage.interface";

@Component({
  selector: 'app-genre-charts',
  templateUrl: './genre-charts.component.html',
  styleUrls: ['./genre-charts.component.scss']
})
export class GenreChartsComponent implements OnChanges {
  @Input() albums!: Album[] | null;

  genres!: GenrePercentage[];

  ngOnChanges(): void {
    if (this.albums) {
      this.genres = this.getGenreTotalsInPercent(this.albums);
    }
  }


  getGenreTotalsInPercent(albums: Album[]): GenrePercentage[] {
    console.log('getGenreTotalsInPercent is executing');
    const percentArray: GenrePercentage[] = []

    // loop through
    albums.forEach((album: Album) => {
      // check if there is an existing genre in the return obj
      if (percentArray.some((obj: GenrePercentage) => obj.genre === album.genre)) {
        // if so loop through again and find the genre
        percentArray.forEach((anotherObj: GenrePercentage) => {
          if (anotherObj['genre'] === album.genre) {
            // increase the occurrence value, so
            anotherObj['occurrence']++;
            // change the percentage value
            anotherObj['percentage'] = Math.round((anotherObj['occurrence'] / albums.length) * 100);
          }
        });
      } else {
        // there is no match
        const newGenre: GenrePercentage = {genre: '', occurrence: 0, percentage: 0};
        // add the key and the occurrence value
        newGenre.genre = album.genre;
        newGenre.occurrence = 1;
        // now add the percentage
        newGenre.percentage = Math.round((1 / albums.length) * 100);
        // now push
        percentArray.push(newGenre);
      }
    });

    return percentArray;
  }

  trackByFn(index: number): number {
    // we pass index or
    return index;
  }
}
