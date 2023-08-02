import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isBlackTheme: boolean = false;

  private baseUrl = 'http://127.0.0.1:8000'; // Replace with the correct backend URL

  constructor(private http: HttpClient) { }
  /*
  getRecommendationByThematic(thematic: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/recommendation/thematic/${thematic}`);
  }
  */
  getBackgroundTheme(city: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/background/${city}`);
  }

  getWeather(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/recommendation/weather/`);
  }

  getGenre(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/genre/`);
  }

  getMovieDetails(title: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/recommendation/weather/`).pipe(
      map((movies: any) => movies.find((movie: any) => movie.title === title))
    );
  }
  

}
