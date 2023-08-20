import { defineStore } from 'pinia';

import UserService from "@/services/UserService";

export const useUserStore = defineStore('user', {
  state: () => ({
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
        const response = await UserService.getUsers(skip);

        console.log(1111, response.data);
        this.list = response.data.data.data;
        this.pageInfo = response.data.data.pageInfo;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    usersList: (state) => state.list,
    usersPageInfo: (state) => state.pageInfo
  }
});
