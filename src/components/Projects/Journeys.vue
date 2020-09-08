<template>
  <hr />
  <div class="journeys">
    <a class="preview" target="_blank" href="https://timesnewrouman.github.io/journeys">
      <span class="preview__name">Journeys</span>
      <img class="preview__image" src="../../images/journeys-preview.png" />
    </a>
    <p class="journeys__info">
      Учебный проект, целью которого было реализовать адаптивную вёрстку (HTML+CSS) макета по методологии БЭМ.
      С репозиторием проекта можно ознакомиться на
      <a
        class="journeys__repo"
        target="_blank"
        href="https://github.com/timesnewrouman/journeys"
      >github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Journeys",
};
</script>

<style scoped>
.journeys {
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
}

.preview {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #2c3e50;
}

.preview__image {
  width: 500px;
}

.preview__name {
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
}

.journeys__info {
  margin: 0 auto 0 20px;
  text-align: left;
  align-self: center;
}

.journeys__repo {
  color: #42b983;
  text-decoration: none;
}
</style>