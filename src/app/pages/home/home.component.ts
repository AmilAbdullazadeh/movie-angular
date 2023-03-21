import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: IMovie[] = []
  upcomingMovies: IMovie[] = []
  topRatedMovies: IMovie[] = []

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular')
      .subscribe((response: any) => {
        this.popularMovies = response.results
      })

    this.moviesService.getMovies('upcoming')
      .subscribe((response: any) => {
        this.upcomingMovies = response.results
      })

    this.moviesService.getMovies('top_rated')
      .subscribe((response: any) => {
        this.topRatedMovies = response.results
      })
  }


}
