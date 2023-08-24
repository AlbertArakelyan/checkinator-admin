import { IPlanItem } from '@/types';

export interface IPlanItemStore {
  list: IPlanItem[];
  loading: boolean;
  error: string | null;
}
