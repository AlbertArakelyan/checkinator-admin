<template>
  <v-card>
    <v-card-title>{{ planEntry ? 'Edit' : 'Create' }} Plan</v-card-title>
    <form @submit.prevent="handleSubmit">
      <v-card-item>
        <v-text-field
          label="Name"
          v-model="data.name"
          :rules="planRules.name"
        ></v-text-field>
        <v-text-field
          label="Price"
          v-model.number="data.price"
          :rules="planRules.price"
        ></v-text-field>
        <v-combobox
          label="Plan Items"
          multiple
          item-value="value"
          item-title="label"
          v-model="data.planItems"
          :items="formattedPlanItemsList"
          :rules="planRules.planItems"
        ></v-combobox>
        <v-combobox
          label="Color"
          v-model="data.color"
          :rules="planRules.color"
          :items="colors"
        ></v-combobox>
      </v-card-item>
      <v-card-actions>
        <v-btn
          color="primary"
          variant="elevated"
          type="submit"
        >
          {{ planEntry ? 'Update' : 'Create' }}
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
import { reactive, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';

import { usePlanItemStore } from '@/store/planItem';
import { usePlanStore } from '@/store/plan';

import { planRules } from '@/utils';

import { colors } from '@/constants';

import { IPlanData, IPlanFormData } from '@/types';

const planItemStore = usePlanItemStore();
const planStore = usePlanStore();

const { planItemsList } = storeToRefs(planItemStore);
const { getPlanItems } = planItemStore;

const { planEntry } = storeToRefs(planStore);
const { createPlan,  editPlan } = planStore;

const emit = defineEmits(['close']);

const data = reactive<IPlanFormData>({
  name: planEntry.value?.name || '',
  price: planEntry.value?.price || 0,
  planItems: planEntry.value?.planItems.map((planItem) => ({ value: planItem._id, label: planItem.name })) || [],
  color: planEntry.value?.color || '',
});

const formattedPlanItemsList = computed(() => {
  return planItemsList.value.map((item) => ({
    value: item._id,
    label: item.name,
  }));
});

const formattedData = computed<IPlanData>(() => {
  return {
    ...data,
    planItems: data.planItems.map((item) => item.value),
  };
});

const resetData = () => {
  data.name = '';
  data.price = 0;
  data.planItems = [];
};

const handleClose = () => {
  emit('close');
};

const handleSubmit = () => {
  if (planEntry.value) {
    editPlan(planEntry.value._id, formattedData.value);
  } else {
    createPlan(formattedData.value);
  }

  resetData();
  handleClose();
};

onMounted(() => {
  if (!planItemsList.value.length) {
    getPlanItems();
  }
});
</script>
