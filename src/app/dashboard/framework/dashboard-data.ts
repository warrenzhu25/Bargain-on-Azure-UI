export interface DashboardData {
  name: string;
  data: number[];
}

export interface DashboardChart {
  data: DashboardData[];
  category?: any[];
}
