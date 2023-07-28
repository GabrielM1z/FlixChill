import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000'; // Replace with the correct backend URL

  constructor(private http: HttpClient) { }

  getRecommendationByThematic(thematic: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/recommendation/thematic/${thematic}`);
  }
}