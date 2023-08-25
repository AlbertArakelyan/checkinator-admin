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
      <create-edit-plan-item-modal @close="closeDialog"></create-edit-plan-item-modal>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import PlanItemsTable from '@/components/views/PlanItems/PlanItemsTable.vue';
import CreateEditPlanItemModal from "@/components/views/PlanItems/CreateEditPlanItemModal.vue";

import { usePlanItemStore } from '@/store/planItem';

const planItemStore = usePlanItemStore();
const { onCancelEditPlanItem } = planItemStore;
const { planItemEntry } = storeToRefs(planItemStore);

const isDialogOpen = ref(false);

const openDialog = () => {
  isDialogOpen.value = true;
};

const closeDialog = () => {
  onCancelEditPlanItem();
  isDialogOpen.value = false;
};

watch(planItemEntry, (value) => {
  if (value) {
    openDialog();
  }
});

watch(isDialogOpen, (value) => {
  if (!value) {
    onCancelEditPlanItem();
  }
});
</script>
