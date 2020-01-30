import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes: any[]): string {

    if(!imagenes)
    {
      return 'assets/img/noimage.png';
    }
    else if(imagenes.length > 0)
    {
      return imagenes[0].url;
    }

    return 'assets/img/noimage.png';
  }

}
