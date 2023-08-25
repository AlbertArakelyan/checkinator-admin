import { defineStore } from 'pinia';

import PlanService from '@/services/PlanService';

import { IPlansStore } from '@/store/plan/types';
import { IPlan } from '@/types';

import { smthWenWrong } from '@/constants';

export const usePlanStore = defineStore('planItem', {
  state: (): IPlansStore => ({
    list: [],
    entry: null,
    loading: false,
    error: null,
  }),
  actions: {
    async getPlans() {
      try {
        const response = await PlanService.getPlans<IPlan[]>();

        if (!response.data.success) {
          throw new Error(response.data.message || smthWenWrong);
        }

        this.list = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    plansList: (state: IPlansStore) => state.list,
  },
});
