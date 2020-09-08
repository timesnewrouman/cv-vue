<template>
  <hr />
  <div class="feynman">
    <a class="preview" target="_blank" href="https://timesnewrouman.github.io/feynman">
      <span class="preview__name">Feynman</span>
      <img class="preview__image" src="../../images/feynman-preview.png" />
    </a>
    <p class="feynman__info">
      Первый учебный проект: вёрстка HTML+CSS.
      С репозиторием проекта можно ознакомиться на
      <a
        class="feynman__repo"
        target="_blank"
        href="https://github.com/timesnewrouman/feynman"
      >github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Feynman",
};
</script>

<style scoped>
.feynman {
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

.feynman__info {
  margin: 0 auto 0 20px;
  text-align: left;
  align-self: center;
}

.feynman__repo {
  color: #42b983;
  text-decoration: none;
}
</style>