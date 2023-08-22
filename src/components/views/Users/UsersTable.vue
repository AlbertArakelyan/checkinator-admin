<template>
  <div>
    <div class="w-100">
      <v-table
        fixed-header
        height="600px"
      >
        <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Role</th>
          <th class="text-left">Verified</th>
          <th class="text-left">Created at</th>
          <th class="text-left">Updated at</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="user in usersList"
          :key="user._id"
        >
          <td>{{ user.firstName }} {{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.isEmailVerified ? 'Yes' : 'No' }}</td>
          <td>{{ user.created_at }}</td>
          <td>{{ user.updated_at }}</td>
        </tr>
        </tbody>
      </v-table>
    </div>
  </div>
  <div>
    <v-pagination
      v-model="page"
      :length="usersPageInfo.pages"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const { getUsers } = userStore;
const { usersList, usersPageInfo } = storeToRefs(userStore);

const page = ref(1);

watch(page, (value) => {
  getUsers(value);
});

onMounted(() => {
  getUsers();
});
</script>
