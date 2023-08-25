<template>
  <div>
    <div class="w-100">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Created at</th>
            <th class="text-left">Updated at</th>
            <th class="text-right">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="planItem in planItemsList" :key="planItem._id">
            <td>{{ planItem.name }}</td>
            <td>{{ planItem.created_at }}</td>
            <td>{{ planItem.updated_at }}</td>
            <td>
              <div class="d-flex align-center justify-end">
                <v-btn
                  class="mr-2"
                  color="primary"
                  rounded="xs"
                  icon="mdi-pencil"
                  @click="handleEditPlanItem(planItem)"
                ></v-btn>
                <v-btn
                  color="error"
                  rounded="xs"
                  icon="mdi-delete"
                  @click="handleDelete(planItem._id)"
                ></v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import { usePlanItemStore } from '@/store/planItem';

import { IPlanItem } from '@/types';

const planItemStore = usePlanItemStore();

const { getPlanItems, deletePlanItem, onEditPlanItem } = planItemStore;
const { planItemsList } = storeToRefs(planItemStore);

const handleDelete = (id: string) => {
  deletePlanItem(id);
};

const handleEditPlanItem = (planItem: IPlanItem) => {
  onEditPlanItem(planItem);
};

onMounted(() => {
  getPlanItems();
});
</script>
