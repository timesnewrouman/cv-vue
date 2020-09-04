<template>
  <div class="cv">
    <Info />
    <Position />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Info from "@/components/Info.vue";
import Position from "@/components/Position.vue";

export default {
  name: "Cv",
  components: {
    HelloWorld,
    Info,
    Position,
  },
};
</script>

<style scoped>
.cv {
  width: 1000px;
  margin: 0 auto;
}
</style>
