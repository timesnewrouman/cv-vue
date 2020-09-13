<template>
  <div class="projects">
    <Newsapp />
    <CardsApp />
    <TaskListVue />
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
import TaskListVue from "@/components/Projects/TaskListVue";

export default {
  name: "Projects",
  components: {
    CardsApp,
    Journeys,
    Newsapp,
    CvVue,
    Feynman,
    TaskListVue,
  },
};
</script>

<style scoped>
.projects {
  width: 1000px;
  margin: 0 auto;
}
</style>