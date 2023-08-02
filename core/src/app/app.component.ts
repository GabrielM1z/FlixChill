import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { HomeComponent } from './pages/home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  recommendation: any;
  backgroundTheme: any;
  lstWeather : any;
  basePath : string = "https://image.tmdb.org/t/p/w185";

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit called');

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
        this.lstWeather = [];
        console.log(response)
        for(let i = 0; i < response.length; i++){
          this.lstWeather.push(response[i].poster_path)
        }
        console.log(this.lstWeather)
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


  openMovieDetails(movieId: string) {
    console.log(movieId);
    // Navigate to the movie details route
    this.router.navigate(['/movie', movieId]);
  }
  
}
