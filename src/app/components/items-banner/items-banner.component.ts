import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {

  @Input() items: IMovie[] = []
  @Input() title: string = ''

}
