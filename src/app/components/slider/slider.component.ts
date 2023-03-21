import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({
      opacity: 0
    })),
      transition('void <=> *', [
        animate('1s')
      ]),
    ])
  ]
})
export class SliderComponent implements OnInit{
  @Input() items: IMovie[] = []

  currentSlideIndex: number = 0

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length
    }, 5000)
  }

}
