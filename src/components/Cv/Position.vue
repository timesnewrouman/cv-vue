<template>
  <span class="position__preview">Желаемая должность и зарплата</span>
  <hr />
  <div class="position">
    <span class="position__salary">55 000</span>
    <span class="position__rub">руб.</span>
    <h3 class="position__name">Младший фронтенд-разработчик</h3>
    <ul class="position__professional-area">
      Информационные технологии, интернет, телеком
      <li class="position__professional-area-li">Программирование, Разработка</li>
    </ul>
    <span class="position__employment">Занятость: полная занятость</span>
    <span class="position__schedule">График работы: полный день, удаленная работа, гибкий график</span>
    <span class="position__road">Желательное время в пути до работы: не имеет значения</span>
  </div>
</template>

<script>
export default {
  name: "Position",
};
</script>

<style scoped>
hr {
  margin-top: 0;
}

.position {
  position: relative;
  display: flex;
  flex-direction: column;
}

.position__preview {
  display: flex;
  margin-top: 25px;
  color: lightslategray;
}

.position__name {
  margin: 0;
  display: flex;
  color: black;
}

.position__professional-area {
  margin: 5px auto 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.position__professional-area-li {
  margin: 3px auto 0 40px;
  position: relative;
}

.position__employment {
  display: flex;
  margin-top: 15px;
}

.position__schedule {
  display: flex;
}

.position__road {
  display: flex;
  margin-top: 20px;
}

.position__salary {
  position: absolute;
  right: 0;
  top: 60px;
  font-size: 24px;
  font-weight: 700;
  color: black;
}

.position__rub {
  position: absolute;
  right: 0;
  top: 85px;
  font-size: 14px;
}
</style>