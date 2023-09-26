<template>
  <div class="flex justify-center p-3 bg-emerald-400 text-white">
    <div class="w-full max-w-screen-2xl">
      <v-row justify="space-between" no-gutters>
        <router-link to="/" class="flex gap-2 items-center">
          <img src="../assets/logo.svg" class="w-7 h-7" />
          <h2 class="text-lg font-semibold">Petson</h2>
        </router-link>
        <div class="flex gap-2">
          <v-btn variant="text" append-icon="mdi-chevron-down">PRODUCTS</v-btn>
          <v-btn variant="text">PROMOTIONS</v-btn>
          <v-btn variant="text">BLOG</v-btn>
        </div>
        <div class="flex gap-2">
          <v-btn variant="outlined" prepend-icon="mdi-cart">Cart (0)</v-btn>
          <v-btn variant="outlined">Login</v-btn>
        </div>
      </v-row>
    </div>
  </div>
</template>
