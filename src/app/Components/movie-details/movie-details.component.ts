import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string = "";
  movieDetails: any = {};
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute , private _DataService:DataService) { }
  ngOnInit(): void {
    this.movieId = this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getDataDetails(this.movieId , "movie").subscribe({
      next:(res)=>this.movieDetails = res ,
      error:(err)=>console.log(err) ,
      complete: () => console.log("completed")
    })
  }

}
