<template>
  <div class="cv">
    <Info />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Info from "@/components/Info.vue";

export default {
  name: "Cv",
  components: {
    HelloWorld,
    Info,
  },
};
</script>

<style scoped>
</style>
