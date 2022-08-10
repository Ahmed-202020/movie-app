import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var $:any ;
@Injectable({
  providedIn: 'root'
})
export class DataService {
  key: string = "1729d2192add209dfef1beb174939cba";
  constructor(private _HttpClient: HttpClient) { }
  getData(mediaType:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${this.key}`);
  }
  getDataDetails(id:string , mediaType:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${this.key}&language=en-US`)
  }
  getDataByPagination(page: number , mediaType:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  }
  hideBg(el:string) {
    $(el).hide(4000);
  }
}
