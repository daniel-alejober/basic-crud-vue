<template>
  <input
    type="text"
    v-model="tarea.nombre"
    placeholder="Nombre Tarea"
    class="form-control"
  />
  <!--checkbox-->
  <div class="my-2">
    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        class="form-check-input"
        v-model="tarea.categoria"
        value="Javascript"
      />
      <label class="form-check-label">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        class="form-check-input"
        v-model="tarea.categoria"
        value="PHP"
      />
      <label class="form-check-label">PHP</label>
    </div>
  </div>
  <!--radio-->
  <div class="my-2">
    <div class="form-check form-check-inline">
      <input v-model="tarea.estado" type="radio" value="urgente" />
      <label class="form-check-label ml-2">Urgente</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="tarea.estado" type="radio" value="relax" />
      <label class="form-check-label ml-2">Relax</label>
    </div>
  </div>
  <!--Number-->
  <div class="my-2">
    <input
      v-model.number="tarea.numero"
      type="number"
      class="form-control"
      placeholder="numero"
    />
  </div>

  <button class="btn btn-block btn-dark" type="submit" :disabled="bloquear">
    {{ tarea.id ? "Editar" : "Agregar" }}
  </button>
</template>

<script>
export default {
  name: "InputVue",
  props: ["tarea"],
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>
