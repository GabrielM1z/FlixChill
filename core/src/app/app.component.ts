import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recommendation: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRecommendationByThematic('some_theme').subscribe(
      (response) => {
        this.recommendation = response;
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );
  }
}
