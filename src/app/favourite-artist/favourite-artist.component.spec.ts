import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteArtistComponent } from './favourite-artist.component';

describe('FavouriteArtistComponent', () => {
  let component: FavouriteArtistComponent;
  let fixture: ComponentFixture<FavouriteArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteArtistComponent]
    });
    fixture = TestBed.createComponent(FavouriteArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
