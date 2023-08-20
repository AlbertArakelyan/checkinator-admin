import { defineStore } from 'pinia';

import UserService from '@/services/UserService';

import { IUserStore } from '@/store/user/types';
import { IUser } from '@/types';

import { smthWenWrong } from '@/constants';

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    list: [],
    pageInfo: {
      page: 1,
      limit: 10,
      total: 0,
      pages: 1,
    }
  }),
  actions: {
    async getUsers(page = 1) {
      try {
        const skip = (page - 1) * 10;
        const response = await UserService.getUsers<IUser[]>(skip);

        if (!response.data.success) {
          throw new Error(response.data.message || smthWenWrong);
        }

        this.list = response.data.data.data;
        this.pageInfo = response.data.data.pageInfo;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    usersList: (state: IUserStore) => state.list,
    usersPageInfo: (state: IUserStore) => state.pageInfo
  }
});
