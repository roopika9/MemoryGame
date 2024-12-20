import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageEssentialsModule } from './page-essentials/page-essentials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameModule } from './game/game.module';
import { MatDialogModule } from '@angular/material/dialog';
// Task 8: Add your import solution here
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageEssentialsModule,
    GameModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
 
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
