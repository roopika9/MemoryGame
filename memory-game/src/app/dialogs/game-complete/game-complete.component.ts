import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-game-complete',
  templateUrl: './game-complete.component.html',
  styleUrls: ['./game-complete.component.css']
})
export class GameCompleteComponent implements OnInit {

  constructor(    private dialogRef: MatDialogRef<GameCompleteComponent>
    ) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close()
}
}
