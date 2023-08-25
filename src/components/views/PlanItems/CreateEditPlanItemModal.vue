<template>
  <v-card>
    <v-card-title>{{ planItemEntry?.name ? 'Edit' : 'Create' }} Plan Item</v-card-title>
    <form @submit.prevent="handleSubmit">
      <v-card-item>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="rules"
        ></v-text-field>
      </v-card-item>
      <v-card-actions>
        <v-btn
          color="primary"
          variant="elevated"
          type="submit"
        >
          {{ planItemEntry?.name ? 'Update' : 'Create' }}
        </v-btn>
        <v-btn
          color="error"
          variant="elevated"
          type="button"
          @click="handleClose"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { usePlanItemStore } from '@/store/planItem';

import { required } from '@/constants';

const planItemStore = usePlanItemStore();
const { planItemEntry } = storeToRefs(planItemStore);
const { createPlanItem, editPlanItem } = planItemStore;

const name = ref(planItemEntry.value?.name || '');

const emit = defineEmits(['close']);

const rules = [
  (value: string) => !!value || required('Name'),
];

const handleClose = () => {
  emit('close');
};

const handleSubmit = () => {
  if (planItemEntry.value) {
    editPlanItem(planItemEntry.value._id, { name: name.value });
  } else {
    createPlanItem({ name: name.value });
  }
  name.value = '';
  handleClose();
};
</script>
