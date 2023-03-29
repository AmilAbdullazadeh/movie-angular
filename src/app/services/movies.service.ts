import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { IMovie, IMovieCredits, IMovieDto, IMovieImages, IMovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { IGenreDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/movie/'
  mainUrl = 'https://api.themoviedb.org/3/'
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

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular'
    return this.http.get<IMovieDto>(`${this.mainUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results)
      })
    )
  }

  getMovie(id: string) {
    return this.http.get<IMovie>(`${this.baseUrl}${id}?api_key=${this.apiKey}`)
  }

  getMovieSimilar(id: string) {
    return this.http.get<IMovieDto>(`${this.baseUrl}${id}/similar?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, 12))
      })
    )
  }

  getMovieVideos(id: string) {
    return this.http.get<IMovieVideoDto>(`${this.baseUrl}${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results)
      })
    )
  }

  getMovieImages(id: string) {
    return this.http.get<IMovieImages>(`${this.baseUrl}${id}/images?api_key=${this.apiKey}`)
  }

  getMovieCredits(id: string) {
    return this.http.get<IMovieCredits>(`${this.baseUrl}${id}/credits?api_key=${this.apiKey}`)
  }

  getMovieGenres() {
    return this.http.get<IGenreDto>(`${this.mainUrl}genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres)
      })
    )
  }

  getMovieByGenres(id: string, page: number) {
    return this.http.get<IMovieDto>(`${this.mainUrl}discover/movie?with_genres=${id}&page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results)
      })
    )
  }

}
