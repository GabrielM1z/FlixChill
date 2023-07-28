import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlixChill';
  apiResponse: any; // Variable pour stocker la réponse de l'API

  constructor(private http: HttpClient) {}

  envoyerRequete(): void {
    const apiUrl = 'http://127.0.0.1:8000/';

    this.http.get(apiUrl)
      .subscribe(
        (data: any) => {
          // Mettre à jour la variable pour stocker la réponse de l'API
          this.apiResponse = data;
        },
        (error: any) => {
          console.error('Erreur lors de la requête AJAX :', error);
        }
      );
  }
}
