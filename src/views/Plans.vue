<template>
  <div>
    <div class="d-flex w-100">
      <h2 class="mr-2">Plans</h2>
      <v-btn color="primary" append-icon="mdi-plus" @click="openDialog">New</v-btn>
    </div>
    <plans-table></plans-table>
    <v-dialog
      v-model="isDialogOpen"
      width="600"
    >
      <create-edit-plan-modal @close="closeDialog"></create-edit-plan-modal>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import PlansTable from '@/components/views/Plans/PlansTable.vue';
import CreateEditPlanModal from '@/components/views/Plans/CreateEditPlanModal.vue';

const isDialogOpen = ref(false);

const openDialog = () => {
  isDialogOpen.value = true;
};

const closeDialog = () => {
  isDialogOpen.value = false;
};
</script>
