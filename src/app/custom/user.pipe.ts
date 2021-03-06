import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(userName: string): string {
    const date = new Date().getHours();
    if (date >= 0 && date <= 12) {
      return 'Good Morning ' + userName;
    } else if (date > 12 && date <= 16) {
      return 'Good Afternoon ' + userName;
         } else {
      return 'Good Evening ' + userName;
    }
  }

}
