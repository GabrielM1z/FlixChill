import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  recommendation: any;
  backgroundTheme: any;
  lst : any;
  a: any;

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

    this.apiService.getBackgroundTheme(encodeURIComponent('Mazatlán')).subscribe(
      (response) => {
        this.backgroundTheme = response.backgroundTheme[0];
        if(this.backgroundTheme == "dark_mode"){
          this.apiService.isBlackTheme = true;
        }else{
          this.apiService.isBlackTheme = false;
        }
        console.log(this.backgroundTheme)
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );

    this.apiService.getWeather().subscribe(
      (response) => {
        this.lst = [];
        console.log(response)
        for(let i = 0; i < response.length; i++){
          this.lst.push(response[i].poster_path)
        }
        console.log(this.lst)
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );

    this.apiService.getGenre().subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );
  }
}
