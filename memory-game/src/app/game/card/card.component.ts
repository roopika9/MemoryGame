import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core'; // Task 10: Update import here
// Task 10: Add import here
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

// Task 10: Add your input output solution here
@Input() card!: Card;

@Output() cardClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  handleClick(): void {
    this.cardClicked.emit()
  }
  //Task 10: Add the handleClick() function here
}
