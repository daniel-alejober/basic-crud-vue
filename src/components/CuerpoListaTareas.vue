<template>
  <tbody>
    <tr v-for="(tarea, index) in tareas" :key="tarea.id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ tarea.nombre }}</td>
      <td>
        <!-- <span v-for="(newT, index) in tarea.categoria" :key="index">{{
          tarea.categoria.length === index + 1 ? newT : `${newT},`
        }}</span> -->
        {{ tarea.categoria.join(",") }}
      </td>
      <td>{{ tarea.estado }}</td>
      <td>{{ tarea.numero }}</td>
      <td>
        <button class="btn btn-danger btn-sm" @click="accionDelete(tarea.id)">
          Eliminar Tarea
        </button>
        <router-link
          class="btn btn-success btn-sm ml-2"
          :to="`/editar/${tarea.id}`"
        >
          Editar Tarea
        </router-link>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CuerpoListaTareas",
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["accionDelete"]),
  },
};
</script>
