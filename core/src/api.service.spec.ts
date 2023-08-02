import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  // Méthode pour effectuer la requête GET
  getSomeData(): Observable<any> {
    const endpoint = 'votre/endpoint'; // Remplacez cela par votre endpoint spécifique sur votre API
    return this.http.get<any>(this.apiUrl + endpoint);
  }
}