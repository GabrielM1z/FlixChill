import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  recommendation: any;
  backgroundTheme: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    /*
    this.apiService.getRecommendationByThematic('some_theme').subscribe(
      (response) => {
        this.recommendation = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );
      */
    this.apiService.getBackgroundTheme('Prague').subscribe(
      (response) => {
        this.backgroundTheme = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );    
  }
}
