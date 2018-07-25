import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatchJob } from '@app/order/framework/batchjob';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) { }
  jobListUrl = "https://bargain-on-azure.azurewebsites.net/jobs";
  submitJobUrl = "https://bargain-on-azure.azurewebsites.net/jobs";

  create(batchJob: BatchJob) {
    return this.http.post(this.submitJobUrl, batchJob);
  }

  getBatchJobList() {
    return this.http.get(this.jobListUrl);
  }
}
