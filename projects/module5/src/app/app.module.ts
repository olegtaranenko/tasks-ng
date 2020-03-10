import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@NgModule({
  declarations: [AppComponent, RatingComponent, FeedbackFormComponent],
  imports: [BrowserModule, MatIconModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule],
})
export class AppModule {}
