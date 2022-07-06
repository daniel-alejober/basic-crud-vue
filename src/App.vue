<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["accionCargarLS"]),
  },
  created() {
    this.accionCargarLS();
  },
};
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
