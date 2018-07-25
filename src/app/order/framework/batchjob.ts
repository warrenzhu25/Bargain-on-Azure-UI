export class BatchJob {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public type: string,
    public batchJobFile: string,
    public price?: number,
    public deadline?: Date,
    public suggestedPrice?: number,
    public suggestDeadline?: Date
  ) { }

}