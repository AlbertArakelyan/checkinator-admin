import { defineStore } from 'pinia';

import PlanService from '@/services/PlanService';

import { IPlansStore } from '@/store/plan/types';
import { IPlan, IPlanData } from '@/types';

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
    async createPlan(data: IPlanData) {
      try {
        const response = await PlanService.createPlan<IPlan, IPlanData>(data);

        if (!response.data.success) {
          throw new Error(response.data.message || smthWenWrong);
        }

        this.list.push(response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deletePlan(id: string) {
      try {
        const response = await PlanService.deletePlan<{id: string}, string>(id);

        if (!response.data.success) {
          throw new Error(response.data.message || smthWenWrong);
        }

        const { id: planId } = response.data.data;
        this.list = this.list.filter(item => item._id !== planId);
      } catch (error) {
        console.log(error);
      }
    },
    onEditPlan(item: IPlan) {
      this.entry = item;
    },
    onCancelEditPlan() {
      this.entry = null;
    },
    async editPlan(id: string, data: IPlanData) {
      try {
        const response = await PlanService.editPlan<IPlan, IPlanData>(id, data);

        if (!response.data.success) {
          throw new Error(response.data.message || smthWenWrong);
        }

        this.entry = null;
        const { _id: planId } = response.data.data;
        this.list = this.list.map(item => item._id === planId ? response.data.data : item);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    plansList: (state: IPlansStore) => state.list,
    planEntry: (state: IPlansStore) => state.entry
  },
});
