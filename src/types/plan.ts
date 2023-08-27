import { IPlanItem } from '@/types/planItem';

export interface IPlan {
  _id: string;
  name: string;
  price: number;
  planItems: IPlanItem[];
  color: string;
  created_at: string;
  updated_at: string;
}

export interface IPlanData {
  name: string;
  price: number;
  planItems: string[];
  color: string;
}

export interface IComboboxPlanItem {
  value: string;
  label: string;
}

export interface IPlanFormData {
  name: string;
  price: number;
  planItems: IComboboxPlanItem[];
  color: string;
}
