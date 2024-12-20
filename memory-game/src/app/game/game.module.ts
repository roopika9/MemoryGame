import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SetupComponent } from './setup/setup.component';
import { PageEssentialsModule } from '../page-essentials/page-essentials.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    CardComponent,
    SetupComponent,
  ],
  exports:[
    CardComponent,
    SetupComponent,

  ],
  imports: [
    CommonModule,
    PageEssentialsModule,
    MatDialogModule
  ],
  providers:[]
})
export class GameModule { }
