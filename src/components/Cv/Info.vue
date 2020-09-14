<template>
  <hr />
  <div class="info">
    <img class="info__photo" src="../../images/photo.jpg" />
    <h1 class="info__name">Жигайков Роман Олегович</h1>
    <span class="info__age">Мужчина, 24 года, родился 12 мая 1996 г.</span>
    <span class="info__tel">+7 (967) 0969125</span>
    <span class="info__email">zhigaikov.roman@yandex.ru</span>
    <a class="info__linkedin" target="_blank" href="https://www.linkedin.com/in/zhigaikov-roman">
      <img src="../../images/linkedin.png" />
      <span>LinkedIn</span>
    </a>
    <a class="info__github" target="_blank" href="https://github.com/timesnewrouman">
      <img src="../../images/github.png" />
      <span>GitHub</span>
    </a>
    <p class="info__home">
      Проживает: Москва, м. Улица Академика Янгеля
      <br />Гражданство: Россия, есть разрешение на работу
    </p>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style>
.info {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.info__name {
  display: flex;
  margin: 0 auto 10px 170px;
  color: black;
}

.info__age {
  margin: 0 auto 10px 170px;
  font-size: 14px;
  display: flex;
}

.info__tel {
  font-size: 14px;
  display: flex;
  margin: 3px auto 0 170px;
}

.info__email {
  display: flex;
  margin: 3px auto 0 170px;
}

.info__linkedin {
  text-decoration: none;
  color: #2c3e50;
  margin: 3px auto 0 170px;
  display: flex;
}

.info__github {
  text-decoration: none;
  color: #2c3e50;
  margin: 3px auto 0 170px;
  display: flex;
}

.info__home {
  width: 50%;
  margin: 10px auto 0 170px;
  display: flex;
  text-align: start;
}

.info__photo {
  width: 150px;
  height: 200px;
  position: absolute;
}
</style>