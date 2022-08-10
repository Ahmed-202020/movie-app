import { Component, OnInit , OnDestroy } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit , OnDestroy {
  tvShow: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  pagesNumber: number[] = [];
  subscription = new Subscription();
  search: string = "";
  constructor(private _DataService:DataService) { }

  ngOnInit(): void {
    this._DataService.hideBg("#myEl2");
    this.pagesNumber = new Array(12);
    this.subscription = this._DataService.getData("tv").subscribe({
      next: (res) => {
        this.tvShow = res.results
      }
    })
  }

  showPage(page:number) {
    this._DataService.getDataByPagination(page, "tv").subscribe({
      next: res => this.tvShow = res.results,
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
