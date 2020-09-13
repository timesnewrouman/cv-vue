<template>
  <hr />
  <div class="tasklist-vue">
    <a class="preview" target="_blank" href="https://timesnewrouman.github.io/tasklist-vue">
      <span class="preview__name">TaskList-vue</span>
      <img class="preview__image" src="../../images/tasklist-vue-preview.png" />
    </a>
    <p class="tasklist-vue__info">
      Учебный проект, реализованный с целью получения практики применения Vue.js.
      Список дел с возможностью фильтрации и реализованным роутером. Планируется дальнейшая доработка проекта.
      С репозиторием проекта можно ознакомиться на
      <a
        class="tasklist-vue__repo"
        target="_blank"
        href="https://github.com/timesnewrouman/tasklist-vue"
      >github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "TaskListVue",
};
</script>

<style scoped>
.tasklist-vue {
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

.tasklist-vue__info {
  margin: 0 auto 0 20px;
  text-align: left;
  align-self: center;
}

.tasklist-vue__repo {
  color: #42b983;
  text-decoration: none;
}
</style>