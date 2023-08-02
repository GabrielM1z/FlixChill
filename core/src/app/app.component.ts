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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('ngOnInit called');
    this.getListLst(); // Appel de la fonction pour récupérer la liste et l'afficher

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
        this.backgroundTheme = response.backgroundTheme[0];
        if(this.backgroundTheme == "dark_mode"){
          this.apiService.isBlackTheme = true;
        }else{
          this.apiService.isBlackTheme = false;
        }
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );

    this.apiService.getWeather().subscribe(
      (response) => {
        this.lst = [];
        const obj = JSON.parse(response);
        for(let i = 0; i < obj.length; i++){
          this.lst.push(obj[i].poster_path)
        }
        console.log(this.lst)
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );
  }



  getListLst() {
    this.apiService.getWeather().subscribe(
      (response) => {
        this.lst = [];
        const obj = (response);
        for (let i = 0; i < obj.length; i++) {
          this.lst.push(obj[i].poster_path)
        }
        console.log(this.lst);
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );
  }
}
