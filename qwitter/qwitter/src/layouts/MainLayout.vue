<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="left = !left"
          class="mobile-only"
        />

        <q-toolbar-title class="text-weight-bold"> Qwitter </q-toolbar-title>
        <q-icon name="auto_awesome" color="primary" size="md" />

        <!-- <q-btn dense flat round icon="menu" @click="right = !right" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area></q-scroll-area>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false,
    };
  },
};
</script>