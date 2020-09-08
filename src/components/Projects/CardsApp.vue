<template>
  <hr />
  <div class="cardsapp">
    <a class="preview" target="_blank" href="https://timesnewrouman.github.io/cards-app">
      <span class="preview__name">Cards-app</span>
      <img class="preview__image" src="../../images/cards-app-preview.png" />
    </a>
    <p class="cardsapp__info">
      Учебный проект, позволяющий добавлять карточки изображений. Реализован функционал лайка карточки, удаления карточки, изменения информации об авторе.
      Целью проекта было разобраться с применением модулей, работой webpack, научиться писать запросы к серверу. Стек используемых технологий: HTML+CSS, JavaScript, Webpack.
      С репозиторием проекта можно ознакомиться на
      <a
        class="cardsapp__repo"
        target="_blank"
        href="https://github.com/timesnewrouman/cards-app"
      >github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "CardsApp",
};
</script>

<style scoped>
.cardsapp {
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

.cardsapp__info {
  margin: 0 auto 0 20px;
  text-align: left;
  align-self: center;
}

.cardsapp__repo {
  color: #42b983;
  text-decoration: none;
}
</style>