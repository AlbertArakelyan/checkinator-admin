<template>
  <v-card>
    <v-card-title>New Plan Item</v-card-title>
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
          Create
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

import { usePlanItemsStore } from '@/store/planItem';

import { required } from '@/constants';

const planItemsStore = usePlanItemsStore();
const { createPlanItem } = planItemsStore

const name = ref('');

const emit = defineEmits(['close']);

const rules = [
  (value: string) => !!value || required('Name'),
];

const handleClose = () => {
  emit('close');
};

const handleSubmit = () => {
  createPlanItem({ name: name.value });
  name.value = '';
};
</script>
