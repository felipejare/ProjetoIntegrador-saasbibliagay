<script setup>
import HeaderComp from "./components/templates/HeaderComp.vue";
import BlocoPrincipal from "./components/templates/BlocoPrincipal.vue";
import MenuS from "./components/templates/MenuS.vue";
</script>

<template>
  <HeaderComp />
  <div class="container">
    <MenuS />
    <div class="content"><RouterView /></div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

body {
  background-color: #ccb8d4;
}

.container {
  min-height: 750px;
  display: flex;
}

.menu {
  background-color: #773b80;
  height: inherit;
  width: 20%;
}

.content {
  background-color: #f9e5f0;
  height: inherit;
  width: 80%;
}
</style>
