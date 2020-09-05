<template>
  <div class="cv">
    <Info />
    <Position />
    <Experience />
    <Education />
    <HardSkills />
  </div>
</template>

<script>
import Info from "@/components/Info";
import Position from "@/components/Position";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import HardSkills from "@/components/HardSkills";

export default {
  name: "Cv",
  components: {
    Info,
    Position,
    Experience,
    Education,
    HardSkills,
  },
};
</script>

<style scoped>
.cv {
  width: 1000px;
  margin: 0 auto;
}
</style>
