import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvSearch'
})
export class TvSearchPipe implements PipeTransform {

  transform(shows:any[] , search:string):any[] {
    return shows.filter(show=>show.name.toLowerCase().startsWith(search.toLowerCase())) ;
  }

}
