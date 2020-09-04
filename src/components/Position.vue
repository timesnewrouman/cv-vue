<template>
  <span class="position__preview">Желаемая должность и зарплата</span>
  <hr />
  <div class="position">Position</div>
</template>

<script>
export default {
  name: "Position",
};
</script>

<style scoped>
.position {
  display: flex;
  flex-direction: column;
}
.position__preview {
  margin-top: 20px;
}
</style>