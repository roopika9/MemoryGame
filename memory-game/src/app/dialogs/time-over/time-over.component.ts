import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-time-over',
  templateUrl: './time-over.component.html',
  styleUrls: ['./time-over.component.css']
})
export class TimeOverComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TimeOverComponent>
  ){
    
  }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close()
  }
}
