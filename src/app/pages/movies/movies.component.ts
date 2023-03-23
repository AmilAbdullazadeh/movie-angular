import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit{
  movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedMovies(1)
  }

  getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe(movies => {
      this.movies = movies
    })
  }

  paginate(event: any) {
    this.getPagedMovies(event.page + 1)
  }
}
