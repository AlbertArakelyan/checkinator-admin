import { IPlanItem } from '@/types/planItem';

export interface IPlan {
  _id: string;
  name: string;
  price: number;
  planItems: IPlanItem[];
  created_at: string;
  updated_at: string;
}

export interface IPlanData {
  name: string;
  price: number;
  planItems: string[];
}
