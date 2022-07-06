<template>
  <div class="px-4 py-1">
    <h1>Editar</h1>
    <form @submit.prevent="accionUpdate">
      <Input :tarea="tarea" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "../components/Input.vue";
export default {
  name: "Editar",
  components: {
    Input,
  },
  computed: {
    ...mapState(["tarea"]),
  },
  methods: {
    ...mapActions(["accionTarea", "accionUpdate"]),
  },
  created() {
    this.accionTarea(this.$route.params.id);
  },
};
</script>
