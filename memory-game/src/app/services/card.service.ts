import { Injectable } from '@angular/core';
//   Task 6: Add your import solution here
import cardImages from '../../assets/cardImages.json';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

//   Task 6: Add your "getCardImages()" function here
getCardImages():any{

  return cardImages

}   


//   Task 7: Add shuffle logic here
shuffleArray(array: any[]): any[] {
  for (var c = array.length - 1; c > 0; c--) {
    const r = Math.floor(Math.random() * c);

    const t = array[c];
    array[c] = array[r];
    array[r] = t;
  }
  return array;
}
  

}
