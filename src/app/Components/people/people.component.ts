import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: any[] = [];
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";
  search: string = "";
  constructor(private _DataService: DataService) { }

  ngOnInit(): void {
    this._DataService.hideBg("#myEl3");
    this._DataService.getData("person").subscribe({
      next: res => this.people = res.results,
      error: err => console.log(err),
      complete:()=>console.log('complete')
    })
  }
}
