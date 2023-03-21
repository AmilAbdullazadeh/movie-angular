import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/movie/'
  apiKey = '246a451242f816b49952a0d3c24a27b6'

  constructor(
    private http: HttpClient
  ) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get(`${this.baseUrl}${type}?api_key=${this.apiKey}`);
  }
}
