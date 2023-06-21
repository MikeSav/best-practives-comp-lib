import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { SioBannersModule, SioButtonsModule, SioChartsModule, SioChipsModule } from "@safetyio/ng-ui-components";

import { AppComponent } from './app.component';
import { ListAlbumsComponent } from "./list-albums/list-albums.component";
import { GenreChartsComponent } from './genre-charts/genre-charts.component';
import { FavouriteArtistComponent } from './favourite-artist/favourite-artist.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';


@NgModule({
  declarations: [
    AppComponent,
    ListAlbumsComponent,
    GenreChartsComponent,
    FavouriteArtistComponent,
    ListArtistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SioBannersModule,
    SioChartsModule,
    SioButtonsModule,
    SioChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
