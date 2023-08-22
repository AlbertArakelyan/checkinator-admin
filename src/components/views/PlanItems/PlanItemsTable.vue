<template>
  <div>
    <div class="w-100">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="planItem in planItemsList" :key="planItem._id">
            <td>{{ planItem.name }}</td>
            <td>Actions</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { usePlanItemsStore } from '@/store/planItem';

const planItemsStore = usePlanItemsStore();

const { getPlanItems } = planItemsStore;
const { planItemsList } = storeToRefs(planItemsStore);

onMounted(() => {
  getPlanItems();
});
</script>
