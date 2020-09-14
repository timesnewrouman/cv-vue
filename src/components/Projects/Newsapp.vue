<template>
  <hr />
  <div class="newsapp">
    <a class="preview" target="_blank" href="https://newsapp.gq">
      <span class="preview__name">Newsapp</span>
      <img class="preview__image" src="../../images/newsapp-preview.png" />
    </a>
    <p class="newsapp__info">
      Дипломный проект курсов от Яндекс.Практикум. Реализован сервис, позволяющий найти актуальные новости и сохранить их в своём личном кабинете.
      Вёрстка макета - html5+css3, БЭМ;
      Frontend - JavaScript, Webpack;
      Backend - Node.js, Express.js, MongoDB.
      <br />Можно ознакомиться с репозиторием frontend-части
      <a
        class="newsapp__repo"
        target="_blank"
        href="https://github.com/timesnewrouman/newsapp-frontend"
      >github</a>
      <br />Можно ознакомиться с репозиторием backend-части
      <a
        class="newsapp__repo"
        target="_blank"
        href="https://github.com/timesnewrouman/newsapp-api"
      >github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Newsapp",
};
</script>

<style scoped>
.newsapp {
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
  margin: 20px auto 20px 0;
}

.preview__name {
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
}

.newsapp__info {
  margin: 0 auto 0 20px;
  text-align: left;
  align-self: center;
}

.newsapp__repo {
  color: #42b983;
  text-decoration: none;
}
</style>