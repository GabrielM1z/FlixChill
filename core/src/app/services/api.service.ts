import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin,Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isBlackTheme: boolean  = false;
  lstReturn : any;

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
    return this.http.get<any>(`${this.baseUrl}/genre`);
  }

  getRecommendedByGender(lstGenre : any): Observable<any> {
    //console.log("ok",lstGenre)
    this.lstReturn = [];
    for(let i = 0; i< lstGenre.length; i++){
      //console.log("i=",i)
      encodeURIComponent(lstGenre[i])
      let a = this.http.get<any>(`${this.baseUrl}/recommendation/list/${encodeURIComponent(lstGenre[i])}`);
      this.lstReturn.push(a)
    }
    //console.log("a",this.http.get<any>(`${this.baseUrl}/genre`))
    return forkJoin(this.lstReturn);
  }
  /*
  getRecommendedByGender(): Observable<any> {
    let lstGenre = this.http.get<any>(`${this.baseUrl}/genre`);
    console.log("getRecommendedByGender", lstGenre)
    this.lstReturn = [];
    /*for(let i = 0; i< lstGenre.length; i++){
      this.lstReturn.push(this.http.get<any>(`${this.baseUrl}/genre`))
    }*=/
    return this.lstReturn;
  }*/
  getMovieDetails(title: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/recommendation/weather/`).pipe(
      map((movies: any) => movies.find((movie: any) => movie.title === title))
    );
  }
  

}
