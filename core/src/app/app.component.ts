// import { Component } from '@angular/core';
// import { ApiService } from './services/api.service';
// import { HomeComponent } from './pages/home/home.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
  
//   recommendation: any;
//   backgroundTheme: any;
//   lstWeather : any;
//   lstGenre : any = ["Action", 'Aventure', 'Animation'];
//   basePath : string = "https://image.tmdb.org/t/p/w185";


//   constructor(private apiService: ApiService) {}

//   ngOnInit() {
//     console.log('ngOnInit called');

//     this.apiService.getBackgroundTheme(encodeURIComponent('Mazatlán')).subscribe(
//       (response) => {
//         this.backgroundTheme = response.backgroundTheme[0];
//         if(this.backgroundTheme == "dark_mode"){
//           this.apiService.isBlackTheme = true;
//         }else{
//           this.apiService.isBlackTheme = false;
//         }
//         console.log(this.backgroundTheme)
//       },
//       (error) => {
//         console.error('Error fetching recommendation:', error);
//       }
//     );

//     this.apiService.getWeather().subscribe(
//       (response) => {
//         this.lstWeather = response;
//         console.log(this.lstWeather)
//       },
//       (error) => {
//         console.error('Error fetching recommendation:', error);
//       }
//     );
    
    
//     this.apiService.getGenre().subscribe(
//       (response) => {
//         this.lstGenre = response;
//         console.log(response);
//       },
//       (error) => {
//         console.error('Error fetching recommendation:', error);
//       }
//     );

//     this.apiService.getRecommendedByGender(this.lstGenre).subscribe(
//       (response) => {

//         console.log("final reponse", response)

//       },
//       (error) => {
//         console.error('Error fetching recommendation:', error);
//       }
//     );
//   }

// }

// /*
//     this.apiService.getRecommendedByGender().subscribe(
//       (response) => {

//         console.log("final reponse", response)

//       },
//       (error) => {
//         console.error('Error fetching recommendation:', error);
//       }
//     );*/
    
//    /*
//    let a = this.getGenre();
//    console.log("a=",a)
//     this.getRecommendedByGender(a);
//     */

//   /*async getGenre() {
//     let response;
//     try {
//       response = await this.apiService.getGenre().toPromise();

//       this.lstGenre = response;
//       console.log("eee",response)
//     } catch (error) {
//       console.error('Error fetching recommendation:', error);
//       response = ""
//     }
//     return response;
//   }

//   async getRecommendedByGender(lstGenre: any) {
//     try {
//       console.log("c'est ici",lstGenre)
//       let response = await this.apiService.getRecommendedByGender(lstGenre).toPromise();
//       console.log("re", response);
//     } catch (error) {
//       console.error('Error fetching recommendation:', error);
//     }
//   }*/
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
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
  lstWeather: any;
  lstGenre: any;
  lstMovieGenre: any;
  basePath: string = "https://image.tmdb.org/t/p/w185";

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit called');

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
        console.log(this.backgroundTheme);

        this.lstWeather = responses[1];
        console.log(this.lstWeather);

        this.lstGenre = responses[2];
        console.log(this.lstGenre);

        // Maintenant que les autres appels sont terminés, appelons getRecommendedByGender
        this.apiService.getRecommendedByGender(this.lstGenre).subscribe(
          (response) => {
            this.lstMovieGenre = response
            console.log("lstMovieGenre", response);
          },
          (error) => {
            console.error('Error fetching recommendation:', error);
          }
        );
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
