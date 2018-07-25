import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatchJob } from '@app/order/framework/batchjob';
import * as Urls from '@app/constants/Url';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) { }
  create(batchJob: BatchJob) {
    return this.http.post(Urls.ServiceUrls.SUBMIT_JOB_URL, batchJob);
  }

  getBatchJobList() {
    return this.http.get(Urls.ServiceUrls.JOB_LIST_URL);
  }
}
