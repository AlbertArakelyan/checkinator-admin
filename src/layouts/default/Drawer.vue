<template>
  <v-layout>
    <v-app-bar
      color="primary"
    >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Checkinator</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      permanent
    >
      <v-list>
        <v-list-item
          v-for="navLink in navLinks"
          :value="navLink.href"
          :key="navLink.href"
          color="primary"
        >
          <router-link class="text-decoration-none text-amber" :to="navLink.href">
            {{ navLink.label }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="pa-4">
        <slot></slot>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { navLinks } from "@/constants";

const drawer = ref(false);
</script>
