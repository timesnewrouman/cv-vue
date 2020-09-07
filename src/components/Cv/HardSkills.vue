<template>
  <span class="hardskills__preview">Ключевые навыки</span>
  <hr />
  <div class="hardskills">
    <span class="hardskills__item">HTML5</span>
    <span class="hardskills__item">CSS3</span>
    <span class="hardskills__item">JavaScript</span>
    <span class="hardskills__item">Vue.js</span>
    <span class="hardskills__item">Node.js</span>
    <span class="hardskills__item">Express.js</span>
    <span class="hardskills__item">Webpack</span>
    <span class="hardskills__item">БЭМ</span>
    <span class="hardskills__item">MongoDB</span>
    <span class="hardskills__item">Github</span>
  </div>
</template>

<script>
export default {
  name: "HardSkills",
};
</script>

<style>
.hardskills {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.hardskills__preview {
  display: flex;
  margin-top: 50px;
  color: lightslategray;
}

.hardskills__item {
  font-weight: 700;
  color: black;
  background-color: silver;
  margin-right: 7px;
  padding: 2px 4px;
}
</style>