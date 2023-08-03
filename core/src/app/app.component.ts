/*import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bestMovie: any;
  recommendation: any;
  backgroundTheme: any;
  lstWeather: any;
  lstGenre: any;
  lstMovieGenre: {[genre: string]: any[]} = {};
  basePath: string = "https://image.tmdb.org/t/p/w185";

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {


    const genres = ['Action', 'Aventure', 'Animation', 'Comédie', 'Crime', 'Documentaire', 'Drame', 'Familial',
                    'Fantaisie', 'Histoire', 'Horreur', 'Musique', 'Mystère', 'Romance', 'Science-fiction', 
                    'Téléfilm', 'Thriller', 'Guerre', 'Western', 'Super-héros'];

    genres.forEach(genre => {
      this.apiService.getMoviesByThematic(genre).subscribe(
        (response: any[]) => {
          this.lstMovieGenre[genre] = response;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });

    const requests = [
      this.apiService.getBackgroundTheme(encodeURIComponent('Prague')),
      this.apiService.getWeather(),
      this.apiService.getGenre()
    ];

    forkJoin(requests).subscribe(
      (responses) => {
        this.backgroundTheme = responses[0].backgroundTheme[0];
        if (this.backgroundTheme === "dark_mode") {
          this.apiService.isBlackTheme = true;
        } else {
          this.apiService.isBlackTheme = false;
        }

        this.lstWeather = responses[1];
        this.lstGenre = responses[2];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  openMovieDetails(movieId: string) {
    this.router.navigate(['/movie', movieId]);
  }
}
*/

import { Component } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBlackTheme: boolean  = false;
  bestMovie: any;
  recommendation: any;
  backgroundTheme: any;
  lstWeather: any;
  lstGenre: any;
  lstMovieGenre: {[genre: string]: any[]} = {};
  basePath: string = "https://image.tmdb.org/t/p/w185";
  title : string = 'FlixChill'
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {

    

    
    const requests = [
      this.apiService.getBackgroundTheme(encodeURIComponent('tokyo')),
      this.apiService.getWeather(),
      this.apiService.getGenre()
    ];
  
    forkJoin(requests).subscribe(
      (responses) => {
        this.backgroundTheme = responses[0].backgroundTheme[0];
        console.log(this.backgroundTheme)
        if (this.backgroundTheme === "dark_mode") {
          this.isBlackTheme = true;
        } else {
          this.isBlackTheme = false;
        }
  
        this.lstWeather = responses[1];
        this.lstGenre = responses[2];
        console.log(responses[2])
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );


    const genres = ['Action', 'Aventure', 'Animation', 'Comédie', 'Crime', 'Documentaire', 'Drame', 'Familial', 'Fantastique', 'Histoire', 'Horreur', 'Musique', 'Mystère', 'Romance', 'Science-Fiction', 'Téléfilm', 'Thriller', 'Guerre', 'Western'];
  
    genres.forEach((genre, index) => {
      this.apiService.getMoviesByThematic(genre).subscribe(
        (response: any[]) => {
          console.log("rep",index,response)
          for(let i = 0; i<response.length; i++){
            console.log(response[i].poster_path)
          }
          this.lstMovieGenre[genre] = response;
          if (index === 0 && response.length > 0) {
            this.bestMovie = response[0];
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  
  
  openMovieDetails(movieId: string) {
    this.router.navigate(['/movie', movieId]);
  }
}
