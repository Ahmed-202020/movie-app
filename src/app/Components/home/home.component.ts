import { Component, OnInit  , OnDestroy} from '@angular/core';
import { DataService } from '../../Services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  movies:any[] = [];
  tv:any[] = [];
  person: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  subscription = new Subscription();
  productPrice: number = 3645645145;
  user:object = {name: "Ahmed" , age:26 , salary:6000}
  constructor(private _DataService:DataService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this._DataService.getData("movie").subscribe({
      next: (res) => this.movies = res.results ,
      error: (error) => console.log(error) ,
      complete:()=> console.log("complete load")
    })
    this._DataService.getData("tv").subscribe({
      next: (res) => this.tv = res.results ,
      error: (error) => console.log(error),
      complete:()=> console.log("complete load")
    })

    this.subscription =  this._DataService.getData("person").subscribe({
      next: (res) => this.person = res.results ,
      error: (error) => console.log(error),
      complete:()=> console.log("complete load")
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
