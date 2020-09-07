<template>
  <span class="education__preview">Образование</span>
  <hr />
  <div class="education">
    <span class="education__degree">Бакалавр</span>
    <span class="education__year">2017</span>
    <span
      class="education__university"
    >Московский государственный технический университет радиотехники, электроники и автоматики, Москва</span>
    <span class="education__path">Информационных технологий, Информационные системы и технологии</span>
  </div>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style>
.education {
  position: relative;
  display: flex;
  flex-direction: column;
}

.education__preview {
  display: flex;
  margin-top: 100px;
  color: lightslategray;
}

.education__degree {
  position: absolute;
  text-align: start;
  margin-top: 10px;
}

.education__year {
  position: absolute;
  text-align: start;
  margin-top: 30px;
  font-size: 13px;
}

.education__university {
  margin: 10px auto 0 130px;
  color: black;
  font-size: 18px;
  font-weight: 700;
  max-width: 520px;
  text-align: start;
}

.education__path {
  margin: 5px auto 0 130px;
  text-align: start;
}
</style>