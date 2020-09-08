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
import Info from "@/components/Cv/Info";
import Position from "@/components/Cv/Position";
import Experience from "@/components/Cv/Experience";
import Education from "@/components/Cv/Education";
import HardSkills from "@/components/Cv/HardSkills";

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
