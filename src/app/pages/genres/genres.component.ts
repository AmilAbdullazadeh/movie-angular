import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IGenre } from '../../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit{
  genres: IGenre[] = []

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.getMovieGenres()
  }

  getMovieGenres() {
    this.moviesService.getMovieGenres().subscribe((genresData) => {
      this.genres = genresData
    })
  }

}
