import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatchJob } from '@app/order/framework/batchjob';
import * as Urls from '@app/constants/Url';
import { Observable } from "rxjs/Observable";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) { }
  create(batchJob: BatchJob): Observable<BatchJob> {
    return this.http.post<BatchJob>(Urls.ServiceUrls.SUBMIT_JOB_URL, batchJob);
  }

  getBatchJobList(): Observable<BatchJob[]> {
    return this.http.get<BatchJob[]>(Urls.ServiceUrls.JOB_LIST_URL);
  }
}
