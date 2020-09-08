<template>
  <div class="certificates">
    <Certificates />
  </div>
</template>

<script>
import Certificates from "@/components/Certificates/Certificates.vue";

export default {
  name: "CertificatesPage",
  components: {
    Certificates,
  },
};
</script>

<style scoped>
.certificates {
  width: 1000px;
  margin: 0 auto;
}
</style>