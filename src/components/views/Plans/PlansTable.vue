<template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left">Plan Items</th>
          <th class="text-left">Created at</th>
          <th class="text-left">Updated at</th>
          <th class="text-right">Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="plan in plansList" :key="plan._id">
          <td>{{ plan.name }}</td>
          <td>${{ plan.price }}</td>
          <td>{{ getPlanItemsNames(plan) }}</td>
          <td>{{ plan.created_at }}</td>
          <td>{{ plan.updated_at }}</td>
          <td>
            <div>buttons</div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { usePlanStore } from '@/store/plan';

import { IPlan } from '@/types';

const planStore = usePlanStore();
const { getPlans } = planStore;
const { plansList } = storeToRefs(planStore);

const getPlanItemsNames = (plan: IPlan) => {
  return plan.planItems.map((planItem) => planItem.name).join(', ');
};

onMounted(() => {
  getPlans();
});
</script>
