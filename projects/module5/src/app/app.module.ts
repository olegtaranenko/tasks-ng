import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/animations';

@NgModule({
  declarations: [AppComponent, RatingComponent],
  imports: [BrowserModule, MatIconModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule, BrowserAnimationsModule],
})
export class AppModule {}
