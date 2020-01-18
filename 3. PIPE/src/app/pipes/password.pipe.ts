import { Pipe, PipeTransform, wtfStartTimeRange } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  tamano:number = 0;
  result:String = " ";

  transform(value: String, pActivar: boolean = true): any {

    if(pActivar == true)
    {
      console.log(this.result.length);
      console.log(value.length);
      while (this.result.length < value.length)
      {
        this.result +="*";
      }
      return this.result;
    }
      else
    {
      return value;
    }

  }

}
