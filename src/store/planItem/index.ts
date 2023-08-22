import { defineStore } from 'pinia';

import PlanItemService from '@/services/PlanItemService';

import { IPlanItemStore } from '@/store/planItem/types';
import { IPlanItem } from '@/types';

import { smthWenWrong } from '@/constants';

export const usePlanItemsStore = defineStore('planItems', {
  state: (): IPlanItemStore => ({
    list: [],
  }),
  actions: {
    async getPlanItems(page = 1) {
      try {
        const response = await PlanItemService.getPlanItems<IPlanItem[]>();

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
    planItemsList: (state: IPlanItemStore) => state.list,
  }
});
