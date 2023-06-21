import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { Album } from "./types/album.interface";
import { ApiService } from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('albumsDialog', {static: true}) dialog!: ElementRef<HTMLDialogElement>;

  albums$!: Observable<Album[]>;

  apiService = inject(ApiService);

  /**
   * Initialize the directive or component after Angular first displays
   * the data-bound properties and
   * sets the directive or component's input properties.
   */
  ngOnInit(): void {
    this.albums$ = this.apiService.getAlbums();
  }

  openDialog(): void {
    this.dialog.nativeElement.showModal();
  }

  closeDialog(): void {
    this.dialog.nativeElement.close();
  }

  addRandomAlbum(): void {
    const id = (Math.random() + 1).toString(36).substring(7);

    const busdriverAlbum = {
      id,
      artist: 'Busdriver',
      title: 'Roadkill Overcoat',
      genre: 'Rap',
      released: '2007'
    };

    this.apiService.addAlbum(busdriverAlbum).subscribe((resp: Album) => {
      console.log(`${JSON.stringify(resp)} was added to the database`);
      // now let's update the view as the Observable won't update automatically as we aren't using a store or anything...
      this.albums$ = this.apiService.getAlbums();
    });
  }
}
