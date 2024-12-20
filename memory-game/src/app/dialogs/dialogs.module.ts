import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GameCompleteComponent } from './game-complete/game-complete.component';
import { TimeOverComponent } from './time-over/time-over.component';



@NgModule({
  declarations: [
    TimeOverComponent,
    GameCompleteComponent,
  ],
  entryComponents: [TimeOverComponent, GameCompleteComponent],
  exports:[
    TimeOverComponent,
    GameCompleteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class DialogsModule { }
