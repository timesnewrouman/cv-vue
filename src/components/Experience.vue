<template>
  <span class="experience__preview">Опыт работы</span>
  <hr />
  <div class="experience">
    <div class="experience__yp">
      <span class="experience__yp-duration">
        Октябрь 2019 — Июль 2020
        <br />9 месяцев
      </span>
      <span class="experience__yp-name">Яндекс.Практикум</span>
      <span class="experience__yp-position">Web разработчик (обучение)</span>
      <button @click="moreDetails" class="experience__button">Подробнее</button>
      <p class="experience__info">
        456
        789
      </p>
    </div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Experience",
  methods: {
    moreDetails() {
      const x = document.querySelector(".experience__info");
      x.style.display = "flex";
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

.experience__yp {
  display: flex;
  flex-direction: column;
}

.experience__yp-duration {
  position: absolute;
  max-width: 125px;
  text-align: start;
  font-size: 12px;
  margin-top: 10px;
}

.experience__button {
  position: absolute;
  margin-top: 60px;
}

.experience__yp-name {
  color: black;
  margin: 8px auto 0 130px;
  font-weight: 700;
  font-size: 18px;
}

.experience__yp-position {
  display: flex;
  margin: 7px auto 0 130px;
}

.experience__info {
  display: none;
  margin: 7px auto 0 130px;
}
</style>