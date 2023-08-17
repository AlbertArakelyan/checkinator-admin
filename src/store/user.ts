import { defineStore } from 'pinia';

import UserService from "@/services/UserService";

export const useUserStore = defineStore('user', {
  state: () => ({
    list: []
  }),
  actions: {
    async getUsers()  {
      try {
        const response = await UserService.getUsers();

        console.log(1111, response.data);
        this.list = response.data.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    usersList: (state) => state.list,
  }
});
