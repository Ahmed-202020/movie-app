import { Component, OnInit , OnDestroy } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Subscription } from 'rxjs';
declare var $:any ;
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit , OnDestroy {
  movies: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  subscription = new Subscription();
  pagesNumber: number[] = [];
  term: string = "";
  constructor(private _DataService:DataService) { }
  ngOnInit(): void {
    this._DataService.hideBg("#myEl")
    // this.pagesNumber = new Array(10).fill(0).map((el , i)=> i+1)
    this.pagesNumber = new Array(12)
    this.subscription = this._DataService.getDataByPagination(1 , "movie").subscribe({
      next: (res) => this.movies = res.results ,
      error: (error) => console.log(error) ,
      complete:()=> console.log("complete load")
    })
  }
  showPage(page:number) {
    this._DataService.getDataByPagination(page , "movie").subscribe({
      next: (res) => this.movies = res.results ,
      error: (error) => console.log(error) ,
      complete:()=> console.log("complete load")
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
