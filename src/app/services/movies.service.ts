import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { IMovieDto } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/movie/'
  apiKey = '246a451242f816b49952a0d3c24a27b6'

  constructor(
    private http: HttpClient
  ) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<IMovieDto>(`${this.baseUrl}${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count))
      })
    )
  }

  searchMovies(page: number) {
    return this.http.get<IMovieDto>(`${this.baseUrl}popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results)
      })
    )
  }
}
