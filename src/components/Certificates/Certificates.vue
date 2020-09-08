<template>
  <div class="certificates">
    <img @click="originalSize" class="certificates__yp" src="../../images/yp-1.png" />
    <img @click="originalSize" class="certificates__yp" src="../../images/yp-2.png" />
    <img @click="originalSize" class="certificates__item" src="../../images/codecademy-vue.png" />
    <img @click="originalSize" class="certificates__item" src="../../images/codecademy-html.png" />
  </div>
</template>

<script>
export default {
  name: "Certificates",
  methods: {
    originalSize() {
      if (event.target.classList.contains("certificates__item_opened")) {
        event.target.classList.remove("certificates__item_opened");
      } else {
        event.target.classList.add("certificates__item_opened");
      }
    },
  },
};
</script>

<style>
.certificates__item {
  position: relative;
  width: 505px;
  height: 383px;
}

.certificates__yp {
  position: relative;
  width: 500px;
  height: 353px;
}

.certificates__item_opened {
  width: unset;
  height: unset;
  max-width: 1000px;
  border: solid 1px #2c3e50;
}
</style>