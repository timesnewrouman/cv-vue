<template>
  <hr />
  <div class="info">
    <img class="info__photo" src="../images/photo.jpg" />
    <h2 class="info__name">Жигайков Роман Олегович</h2>
    <span class="info__age">Мужчина, 24 года, родился 12 мая 1996</span>
    <span class="info__tel">+7 (967) 0969125</span>
    <span class="info__email">zhigaikov.roman@yandex.ru</span>
    <a class="info__linkedin" target="_blank" href="https://www.linkedin.com/in/zhigaikov-roman">
      <img src="../images/linkedin.png" />
      <span>LinkedIn</span>
    </a>
    <a class="info__github" target="_blank" href="https://github.com/timesnewrouman">
      <img src="../images/github.png" />
      <span>GitHub</span>
    </a>
    <p class="info__home">
      Проживает: Москва, м. Улица Академика Янгеля
      Гражданство: Россия, есть разрешение на работу: Россия
      Не готов к переезду, готов к редким командировкам
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
}

.info__name {
  margin-top: 0;
  margin-bottom: 10px;
}

.info__age {
  margin: 0;
  font-size: 14px;
}

.info__tel {
  font-size: 14px;
  margin-top: 7px;
}

.info__linkedin {
  text-decoration: none;
  color: #2c3e50;
  margin: auto;
}

.info__github {
  text-decoration: none;
  color: #2c3e50;
  margin: auto;
}

.info__home {
  width: 50%;
  margin: 10px auto 0 auto;
}

.info__photo {
  width: 150px;
  height: 200px;
  position: absolute;
}
</style>