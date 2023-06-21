import {
  Component, EventEmitter,
  Input, Output
} from '@angular/core';

import { Album } from '../types/album.interface';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent {
  @Input() albums!: Album[] | null;

  @Output() closeModal: EventEmitter<null> = new EventEmitter();

  closeOpenModal(): void {
    this.closeModal.emit(null);
  }

  trackByFn(index: number): number {
    // we pass index or
    return index;
  }
}
