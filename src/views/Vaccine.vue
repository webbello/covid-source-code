<template>
  <div class="vaccine">
    <Vaccine />
  </div>
</template>

<script>
import Vaccine from "@/components/Vaccine.vue";
export default {
  name: "app",
  components: {
    Vaccine,
  },
};
</script>
<style>
.vaccine {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
