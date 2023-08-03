import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const movieTitle = this.route.snapshot.paramMap.get('title') || '';

    this.apiService.getMovieDetails(movieTitle).subscribe(
      (movie) => {
        this.movieDetails = movie;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
}
