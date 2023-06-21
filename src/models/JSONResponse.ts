import { Support } from "./Support";
import { User } from "./User";

export interface JSONResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support?: Support;
  }