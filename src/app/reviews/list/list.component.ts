import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { IReview } from '../review';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  reviews: IReview[];
  pageTitle: string = "Reviews List";

  constructor(private _reviewsService: ReviewsService) { }

  ngOnInit() {
    this._reviewsService.getReveiws()
      .subscribe(revs => this.reviews = revs);
  }

}
