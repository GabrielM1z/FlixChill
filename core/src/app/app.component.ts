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
        console.log(response)
        //const titles = response.map((element) => element.title);
        const obj = JSON.parse(response);
        console.log(obj)
        //for(let i = 0; i < obj.length; i++){

        //}
        this.lst = ["/2KSNfS9yYDenhRhDHCTM3hSOim2.jpg","/jNICaPciTja37SkbSZh4XCsA0Q6.jpg","/2KSNfS9yYDenhRhDHCTM3hSOim2.jpg","/jNICaPciTja37SkbSZh4XCsA0Q6.jpg","/2KSNfS9yYDenhRhDHCTM3hSOim2.jpg","/jNICaPciTja37SkbSZh4XCsA0Q6.jpg"]
      },
      (error) => {
        console.error('Error fetching recommendation:', error);
      }
    );
  }
}
