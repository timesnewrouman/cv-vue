<template>
  <span class="experience__preview">Опыт работы</span>
  <hr />
  <div class="experience">
    <div class="experience__yp">
      <span class="experience__duration">
        Октябрь 2019 — Июль 2020
        <br />9 месяцев
      </span>
      <span class="experience__name">Яндекс.Практикум</span>
      <span class="experience__position">Web разработчик (обучение)</span>
      <button @click="moreDetails" class="experience__button">Подробнее</button>
      <div class="experience__info">
        Прохождение обучающего курса веб-разработки.
        (Стек технологий: html5+css3, БЭМ, JavaScript, Webpack,
        Node.js, Express.js, MongoDB)
        <br />
        <br />Дипломный проект:
        <br />https://newsapp.gq - сервис, позволяющий найти актуальные новости и сохранить их в своём личном кабинете.
        Вёрстка макета - html5+css3, БЭМ;
        Frontend - JavaScript, Webpack
        Backend - Node.js, Express.js, MongoDB
        Репозиторий frontend-части (https://github.com/timesnewrouman/newsapp-frontend)
        Репозиторий backend-части (https://github.com/timesnewrouman/newsapp-api)
        <br />
        <br />Учебные проекты:
        <br />1) https://github.com/timesnewrouman/feynman - вёрстка макета (html5+css3, БЭМ)
        <br />2) https://github.com/timesnewrouman/journeys - адаптивная вёрстка макета (html5+css3, БЭМ, figma)
        <br />3) https://github.com/timesnewrouman/simplecards - вёрстка макета и написание скрипта (javascript, html5+css3, БЭМ)
        <br />4) https://github.com/timesnewrouman/cards-app - доработка simplecards. Теперь приложение работает с запросами: можно добавлять/лайкать свои карточки и менять аватар пользователя.
        <br />5) https://github.com/timesnewrouman/regform - написание простой формы регистрации.
        <br />
        <br />Все учебные проекты проверены наставниками и код-ревьюерами Яндекс.Практикума.
      </div>
    </div>
    <div class="experience__jamilco">
      <span class="experience__duration">
        Сентябрь 2017 — Сентябрь 2019
        <br />2 года
      </span>
      <span class="experience__name">ДжамильКо</span>
      <span class="experience__position">Системный инженер</span>
      <button @click="moreDetails" class="experience__button">Подробнее</button>
      <div class="experience__info">
        — Работа с заявками в ServiceDesk (раздел IT)
        <br />— Настройка ИТ оборудования
        <br />— Выявление ошибок в процессе работы оборудования и их устранение
        <br />— Работа с Active Directory
        <br />— Работа с MS Exchange
        <br />— Настройка ip телефонии
        <br />— Организация новых рабочих мест
        <br />— Коммутация сети, анализ возникающих проблем
      </div>
    </div>
    <div class="experience__1580">
      <span class="experience__duration">
        Октябрь 2015 — Март 2016
        <br />и
        <br />Октябрь 2016 — Март 2017
        <br />1 год
      </span>
      <span class="experience__duration"></span>
      <span class="experience__name">Физико-математический лицей №1580</span>
      <span class="experience__position">Педагог дополнительного образования</span>
      <button @click="moreDetails" class="experience__button-1580">Подробнее</button>
      <div
        class="experience__info"
      >Подготовка учащихся к сдаче вступительных экзаменов в 10й класс по математике.</div>
    </div>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Experience",
  methods: {
    moreDetails() {
      if (event.target.textContent === "Подробнее") {
        event.target
          .closest("div")
          .querySelector(".experience__info").style.display = "flex";
        event.target.textContent = "Скрыть";
      } else if (event.target.textContent === "Скрыть") {
        event.target
          .closest("div")
          .querySelector(".experience__info").style.display = "none";
        event.target.textContent = "Подробнее";
      }
    },
  },
};
</script>

<style>
.experience {
  position: relative;
  display: flex;
  flex-direction: column;
}

.experience__preview {
  display: flex;
  margin-top: 25px;
  color: lightslategray;
}

hr {
  margin-top: 0;
}

.experience__yp {
  display: flex;
  flex-direction: column;
}

.experience__duration {
  position: absolute;
  max-width: 100px;
  text-align: start;
  font-size: 12px;
  margin-top: 10px;
}

.experience__button-1580 {
  position: absolute;
  margin-top: 100px;
}

.experience__button {
  position: absolute;
  margin-top: 60px;
}

.experience__name {
  color: black;
  margin: 8px auto 0 130px;
  font-weight: 700;
  font-size: 18px;
}

.experience__position {
  display: flex;
  margin: 7px auto 0 130px;
}

.experience__info {
  display: none;
  margin: 7px auto 0 130px;
  text-align: start;
  border: 1px solid #2c3e50;
}

.experience__jamilco {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.experience__1580 {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>