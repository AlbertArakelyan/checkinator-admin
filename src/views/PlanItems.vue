<template>
  <div>
    <div class="d-flex w-100">
      <h2 class="mr-2">Plan Items</h2>
      <v-btn color="primary" append-icon="mdi-plus" @click="openDialog">
        New
      </v-btn>
    </div>
    <plan-items-table></plan-items-table>
    <v-dialog
      v-model="isDialogOpen"
      width="600"
    >
      <create-plan-item-modal @close="closeDialog"></create-plan-item-modal>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import PlanItemsTable from '@/components/views/PlanItems/PlanItemsTable.vue';
import CreatePlanItemModal from '@/components/views/PlanItems/CreatePlanItemModal.vue';

const isDialogOpen = ref(false);

const openDialog = () => {
  isDialogOpen.value = true;
};

const closeDialog = () => {
  isDialogOpen.value = false;
};
</script>
