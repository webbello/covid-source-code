<template>
  <div class="beds">
    <Beds />
  </div>
</template>

<script>
import Beds from "@/components/Beds.vue";
export default {
  name: "app",
  components: {
    Beds,
  },
};
</script>
<style>
.beds {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
