import { defineStore } from 'pinia';

import PlanItemService from '@/services/PlanItemService';

import { IPlanItemStore } from '@/store/planItem/types';
import { IPlanItem, IPlanItemData } from '@/types';

import { smthWenWrong } from '@/constants';

export const usePlanItemsStore = defineStore('planItems', {
  state: (): IPlanItemStore => ({
    list: [],
    loading: false,
    error: null,
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
    async createPlanItem(data: IPlanItemData) {
      try {
        const response = await PlanItemService.createPlanItem<IPlanItem, IPlanItemData>(data);

        if (!response.data.success) {
          throw new Error(response.data.message || smthWenWrong);
        }

        this.list.push(response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deletePlanItem(id: string) {
      try {
        const response = await PlanItemService.deletePlanItem<{id: string}, string>(id);

        if (!response.data.success) {
          throw new Error(response.data.message || smthWenWrong);
        }

        const { id: planItemId } = response.data.data;
        this.list = this.list.filter(item => item._id !== planItemId);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    planItemsList: (state: IPlanItemStore) => state.list,
  }
});
