<template>
  <div class="oxygen">
    <Oxygen />
  </div>
</template>

<script>
import Oxygen from "@/components/Oxygen.vue";
export default {
  name: "app",
  components: {
    Oxygen,
  },
};
</script>
<style>
.oxygen {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
