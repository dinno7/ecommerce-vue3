<template>
  <div id="app">
    <transition appear name="header">
      <BaseHeader />
    </transition>
    <router-view v-slot="{ Component }">
      <transition appear name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <BaseFooter />
  </div>
</template>
<script>
import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";
export default {
  name: "App",
  components: { BaseHeader, BaseFooter },
};
</script>
<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.route-enter-active {
  transition: all 0.5s;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.route-leave-active {
  transition: all 0.5s;
}
/* --------------------------------- */
.header-enter-from,
.header-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.header-enter-active,
.header-leave-active {
  transition: all 0.5s;
}
</style>
