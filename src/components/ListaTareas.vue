<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th scope="col">#id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categoria</th>
        <th scope="col">Estado</th>
        <th scope="col">Numero</th>
      </tr>
    </thead>
    <CuerpoListaTareasVue />
  </table>
</template>

<script>
import CuerpoListaTareasVue from "./CuerpoListaTareas.vue";
export default {
  name: "ListaTareas",
  components: {
    CuerpoListaTareasVue,
  },
};
</script>
