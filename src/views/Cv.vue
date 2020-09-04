<template>
  <div class="cv">
    <Info />
    <Position />
    <Experience />
  </div>
</template>

<script>
import Info from "@/components/Info";
import Position from "@/components/Position";
import Experience from "@/components/Experience";

export default {
  name: "Cv",
  components: {
    Info,
    Position,
    Experience,
  },
};
</script>

<style scoped>
.cv {
  width: 1000px;
  margin: 0 auto;
}
</style>
