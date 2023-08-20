import { IUser } from '@/types';

export interface IUserStore {
  list: IUser[];
  pageInfo: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
