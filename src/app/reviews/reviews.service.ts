import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IReview } from './review';

@Injectable()
export class ReviewsService {

  private _apiUrl : string = './api/reviews/reviews.json';
  private _apiUrl2 : string = "./assets/mydata.json";

  constructor(private _http : HttpClient) { }

  getReveiws(): Observable<IReview[]>{
    return this._http.get<IReview[]>(this._apiUrl2)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}

}
