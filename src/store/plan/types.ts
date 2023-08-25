import { IPlan } from '@/types';

export interface IPlansStore {
  list: IPlan[];
  entry: IPlan | null;
  loading: boolean;
  error: string | null;
}
