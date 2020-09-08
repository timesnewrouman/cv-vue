<template>
  <hr />
  <div class="cv-vue">
    <a class="preview" target="_blank" href="https://timesnewrouman.github.io/cv-vue">
      <span class="preview__name">Cv-vue</span>
      <img class="preview__image" src="../../images/cv-vue-preview.png" />
    </a>
    <p class="cv-vue__info">
      Учебный проект, реализованный с целью получения практики применения Vue.js.
      Веб-резюме, адаптированная под сферу разработки. Планируется дальнейшая доработка проекта.
      С репозиторием проекта можно ознакомиться на
      <a
        class="cv-vue__repo"
        target="_blank"
        href="https://github.com/timesnewrouman/cv-vue"
      >github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "CvVue",
};
</script>

<style scoped>
.cv-vue {
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
  border: solid 1px #2c3e50;
}

.preview__name {
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
}

.cv-vue__info {
  margin: 0 auto 0 20px;
  text-align: left;
  align-self: center;
}

.cv-vue__repo {
  color: #42b983;
  text-decoration: none;
}
</style>