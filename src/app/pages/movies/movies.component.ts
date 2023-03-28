import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit{
  movies: IMovie[] = [];
  genreId: string = ''

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ id }) => {
      if (id) {
        this.genreId = id
        this.getMoviesByGenre(id, 1)
      } else {
        this.getPagedMovies(1)
      }
    })
  }

  getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies
    })
  }

  getMoviesByGenre(id: string, page: number) {
    this.moviesService.getMovieByGenres(id, page).subscribe((movies) => {
      this.movies = movies
    })
  }

  paginate(event: any) {
    const pageNumber = event.page + 1
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber)
    } else {
      this.getPagedMovies(pageNumber)
    }
  }
}
