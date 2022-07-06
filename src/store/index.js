import { createStore } from "vuex";
import router from "../router";

export const store = createStore({
  state: {
    tareas: [],
    tarea: {
      id: "",
      nombre: "",
      categoria: [],
      estado: "",
      numero: 0,
    },
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas.push(payload);
      localStorage.setItem("tareas", JSON.stringify(state.tareas));
    },
    deleteTarea(state, payload) {
      state.tareas = state.tareas.filter((newTarea) => newTarea.id !== payload);
      localStorage.setItem("tareas", JSON.stringify(state.tareas));
    },
    editarTarea(state, payload) {
      if (!state.tareas.find((newTarea) => newTarea.id === payload)) {
        router.push("/");
        return;
      }
      state.tarea = state.tareas.find((newTarea) => newTarea.id === payload);
    },
    actualizarTarea(state, payload) {
      state.tareas = state.tareas.map((newTarea) =>
        newTarea.id === payload.id ? payload : newTarea
      );
      localStorage.setItem("tareas", JSON.stringify(state.tareas));
      router.push("/");
    },
    cargarTareasLS(state, payload) {
      state.tareas = payload;
    },
  },
  actions: {
    accionTareas({ commit }, tarea) {
      commit("setTareas", tarea);
    },
    accionDelete({ commit }, id) {
      commit("deleteTarea", id);
    },
    accionTarea({ commit }, id) {
      commit("editarTarea", id);
    },
    accionUpdate({ commit }, tarea) {
      commit("actualizarTarea", tarea);
    },
    accionCargarLS({ commit }) {
      if (localStorage.getItem("tareas")) {
        const tareasLS = JSON.parse(localStorage.getItem("tareas"));
        commit("cargarTareasLS", tareasLS);
        return;
      }
      //*Si no encontramos nada entonces creamos el elemento en el LS vacio
      localStorage.setItem("tareas", JSON.stringify([]));
    },
  },
});
