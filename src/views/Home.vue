<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/helping-logo.webp" />
    <HelloWorld msg="Welcome to Cov-aid" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
