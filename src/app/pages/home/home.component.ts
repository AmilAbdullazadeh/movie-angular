import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: IMovie[] = []

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe((response: any) => {
        this.movies = response.results
      })
  }


}
