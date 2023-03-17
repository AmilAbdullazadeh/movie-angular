import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) {}
  
  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=246a451242f816b49952a0d3c24a27b6');
  }
}
