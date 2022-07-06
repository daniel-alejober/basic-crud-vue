<template>
  <div class="mx-5">
    <h1 class="text-center">Formularios</h1>

    <form @submit.prevent="handleSubmit">
      <InputVue :tarea="tarea" />
      <ListaTareasVue />
    </form>
  </div>
</template>

<script>
import InputVue from "../components/Input.vue";
import ListaTareasVue from "../components/ListaTareas.vue";
import { uid } from "../helpers/uid";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    InputVue,
    ListaTareasVue,
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        categoria: [],
        estado: "",
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(["accionTareas"]),
    handleSubmit() {
      this.tarea.id = uid();
      console.log(this.tarea);
      this.accionTareas(this.tarea);
      this.tarea = {
        id: "",
        nombre: "",
        categoria: [],
        estado: "",
        numero: 0,
      };
    },
  },
};
</script>
