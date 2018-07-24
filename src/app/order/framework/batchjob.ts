export class BatchJob {
  constructor(
    public id: number,
    public jobName: string,
    public status: string,
    public type: string,
    public batchJobFile: string
  ) { }

}