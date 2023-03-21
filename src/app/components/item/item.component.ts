import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData: IMovie | null = null

}
