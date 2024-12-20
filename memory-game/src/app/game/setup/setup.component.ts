import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { TimeOverComponent } from 'src/app/dialogs/time-over/time-over.component';
import { GameCompleteComponent } from 'src/app/dialogs/game-complete/game-complete.component';
//  Task 8: Add your import solution here
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})




export class SetupComponent implements OnInit {
    
    //   Task 12: Initialise your variables here
    cards: Card[] = [];
    openCards : Array<number>= []
    pairsMatched = 0;
    //   Task 13: Initialise your variables here
    timeLeft: number = 40;
    interval: any;
    //   Task 17: Initialize your variables here

  constructor(
    //   Task 8: Add your solution here
    private _dialog: MatDialog,
    private _router: Router, 
    private _cardService: CardService
  ) {}

  ngOnInit(): void {
    //   Task 12: Call your createCardBoard() here
    this.createCardBoard();
  }

    //   Task 12+13: Add your createCardBoard() function and timer logic here
    createCardBoard(): void {
      let cardImages = this._cardService.getCardImages()
      this.cards = [...structuredClone(cardImages), ...structuredClone(cardImages)];
      this.cards = this._cardService.shuffleArray(this.cards);
      this.interval = setInterval(() => {
         if (this.timeLeft > 0) {
             this.timeLeft--;
         } else {
             clearInterval(this.interval);
             this._dialog.open(TimeOverComponent, {
                 disableClose: false,
             }).afterClosed().subscribe(() => {
                 this.timeLeft = 40;
                 this.restart()
             });
         }
     }, 1000);
    }
    checkForGameCompletion(matchedPairsCount:number): boolean{
      return matchedPairsCount===this._cardService.getCardImages().length? true :  false  
    }
    //   Task 15 : Add your logic here

    //   Task 16: Add your logic here
    checkForCardMatch(choiceOne : number, choiceTwo : number): boolean {
      if (this.cards[choiceOne].imageId === this.cards[choiceTwo].imageId){
          this.cards[choiceOne].isMatched = true
          this.cards[choiceTwo].isMatched= true
      }
      else{
          this.cards[choiceOne].isFlipped = this.cards[choiceTwo].isFlipped = false
      }
      return this.cards[choiceOne].isMatched
  }
    //   Task 17: Add your handleClick function here
    handleCardClick(index: number): void {
      const cardClicked = this.cards[index];
 
      if (cardClicked.isFlipped === false && this.openCards.length < 2) {
          cardClicked.isFlipped = true;
          this.openCards.push(index);
          if (this.openCards.length > 1) {
      
              setTimeout(() => {
              if ( this.checkForCardMatch(this.openCards[0],this.openCards[1]) === true) {
                  this.pairsMatched++;
 
                  if (this.checkForGameCompletion(this.pairsMatched) === true) {
                      clearInterval(this.interval);
                      this ._dialog.open(GameCompleteComponent, {
                      disableClose: true,
                      }).afterClosed().subscribe(() => {
         this.restart()
                      });
                  }
              }
              this.openCards = [];
              }, 1000);
          }
      } else if (cardClicked.isFlipped === true) {
          cardClicked.isFlipped = false;
          this.openCards.pop();
      }
    }
    //   Task 18: Add restart() function solution here

    restart(): void {
      this.pairsMatched = 0;
      this.timeLeft = 40;
      this.createCardBoard();
   }
}

