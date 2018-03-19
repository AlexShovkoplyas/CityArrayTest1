import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';
import { ReviewsService } from './reviews.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      
        {path : 'reviews/list', component: ListComponent },
        {path : 'reviews/info/:id', component: InfoComponent }    

    ])
  ],
  declarations: [InfoComponent, ListComponent],
  providers: [ReviewsService]
})
export class ReviewsModule { }
