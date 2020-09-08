<template>
  <div class="projects">
    <Newsapp />
    <CardsApp />
    <CvVue />
    <Journeys />
    <Feynman />
  </div>
</template>

<script>
import CardsApp from "@/components/Projects/CardsApp";
import Journeys from "@/components/Projects/Journeys";
import Newsapp from "@/components/Projects/Newsapp";
import CvVue from "@/components/Projects/CvVue";
import Feynman from "@/components/Projects/Feynman";

export default {
  name: "Projects",
  components: {
    CardsApp,
    Journeys,
    Newsapp,
    CvVue,
    Feynman,
  },
};
</script>

<style scoped>
.projects {
  width: 1000px;
  margin: 0 auto;
}
</style>