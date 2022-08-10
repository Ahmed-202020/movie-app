import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peopleSearch'
})
export class PeopleSearchPipe implements PipeTransform {

  transform(people:any[] , search:string):any[] {
    return people.filter(person=>person.original_name.toLowerCase().startsWith(search.toLowerCase())) ;
  }

}
