import { IPlanItem } from '@/types';

export interface IPlanItemStore {
  list: IPlanItem[];
  entry: IPlanItem | null;
  loading: boolean;
  error: string | null;
}
