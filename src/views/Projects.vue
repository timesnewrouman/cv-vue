<template>
  <div class="projects">
    <CardsApp />
    <Journeys />
    <Newsapp />
  </div>
</template>

<script>
import CardsApp from "@/components/Projects/CardsApp";
import Journeys from "@/components/Projects/Journeys";
import Newsapp from "@/components/Projects/Newsapp";
//import CardsApp from "@/components/Projects/CardsApp";
//import CardsApp from "@/components/Projects/CardsApp";
//import CardsApp from "@/components/Projects/CardsApp";

export default {
  name: "Projects",
  components: {
    CardsApp,
    Journeys,
    Newsapp,
  },
};
</script>

<style scoped>
.projects {
  width: 1000px;
  margin: 0 auto;
}
</style>