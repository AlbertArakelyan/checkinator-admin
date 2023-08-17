<template>
  <v-app>
    <drawer>
      <router-view />
    </drawer>
  </v-app>
</template>

<script lang="ts" setup>
import Drawer from "@/layouts/default/Drawer.vue";
</script>
