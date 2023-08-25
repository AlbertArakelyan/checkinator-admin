<template>
  <v-card>
    <v-card-title>Create Plan</v-card-title>
    <form @submit.prevent="handleSubmit">
      <v-card-item>
        <v-text-field
          label="Name"
          v-model="data.name"
        ></v-text-field>
        <v-text-field
          label="Price"
          v-model.number="data.price"
        ></v-text-field>
        <v-combobox
          label="Plan Items"
          multiple
          item-value="id"
          item-title="text"
          v-model="data.planItems"
          :items="[{id: 1, text: 'Item 1'}, {id: 2, text: 'Item 2'}]"
        >

        </v-combobox>
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
import { reactive } from 'vue';

import { IPlanData } from '@/types';

const emit = defineEmits(['close']);

const data = reactive<IPlanData>({
  name: '',
  price: 0,
  planItems: [],
});

const handleClose = () => {
  emit('close');
};

const handleSubmit = () => {
  console.log(data)
}
</script>
