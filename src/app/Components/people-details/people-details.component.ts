import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  personId: string = "";
  personDetails: any = {};
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _DataService:DataService , private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.personId = this._ActivatedRoute.snapshot.params["id"];
    this._DataService.getDataDetails(this.personId, "person").subscribe({
      next: res => this.personDetails = res,
      error: err => console.log(err),
      complete: () => console.log("completed")
    })
  }

}
