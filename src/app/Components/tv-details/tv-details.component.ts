import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
  tvId: string = "";
  tvDetails:any = {};
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _DataService:DataService , private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.tvId = this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getDataDetails(this.tvId , "tv").subscribe({
      next: res => this.tvDetails = res ,
      error: (err) => console.log(err),
      complete: () => {
        console.log("completed")
      }
    })
  }

}
