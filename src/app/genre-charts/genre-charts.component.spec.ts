import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreChartsComponent } from './genre-charts.component';

describe('GenreChartsComponent', () => {
  let component: GenreChartsComponent;
  let fixture: ComponentFixture<GenreChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreChartsComponent]
    });
    fixture = TestBed.createComponent(GenreChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
