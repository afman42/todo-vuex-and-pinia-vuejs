<template>
  <div class="container" style="margin-top: 20px">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">SIMPLE TODO APP</h5>
        <div class="row">
          <div class="col-10">
            <input
              v-model="todo"
              type="text"
              class="form-control"
              @keyup.enter="add"
            />
          </div>
          <div class="col-2">
            <button class="btn btn-success" @click="add">ADD</button>
          </div>
        </div>
        <List :todos="list" @deleteTodo="deleteTodo" @doneTodo="doneTodo" />
        <br />
        <small>Total TODO : {{ totalTODO }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import store from "@/store";
import List from "./components/List.vue";
export default defineComponent({
  components: { List },
  setup(){
    const todo = ref<string>(store.state.todo)
    const list = computed(() => store.state.list)
    const totalTODO = computed(() => store.getters.totalTODO)
    onMounted(() => {
      const items = localStorage.getItem("todos");
      store.state.list = items ? JSON.parse(items) : [];
    })

    function add() {
      store.commit("SET_ADD", todo);
      store.commit('SET_SAVE_LOCALSTORAGE')
    }
    function deleteTodo(todoIndex: number) {
      store.commit("SET_DELETE_TODO", todoIndex);
      store.commit('SET_SAVE_LOCALSTORAGE')
    }
    function doneTodo(todoIndex: number) {
      store.commit("SET_DONE_TODO", todoIndex);
      store.commit('SET_SAVE_LOCALSTORAGE')
    }
    return {
      todo,list,totalTODO, add,deleteTodo, doneTodo
    }
  }
  // data() {
  //   return {
  //     todo: store.state.todo
  //   };
  // },
  // created() {
  //   const items = localStorage.getItem("todos");
  //   store.state.list = items ? JSON.parse(items) : [];
  // },
  // computed: {
  //   totalTODO() {
  //     return store.getters.totalTODO;
  //   },
  //   list(){
  //     return store.state.list
  //   },
  // },
  // methods: {
  //   add() {
  //     store.commit("SET_ADD", this.todo);
  //     store.commit('SET_SAVE_LOCALSTORAGE')
  //   },
  //   deleteTodo(todoIndex: number) {
  //     store.commit("SET_DELETE_TODO", todoIndex);
  //     store.commit('SET_SAVE_LOCALSTORAGE')
  //   },
  //   doneTodo(todoIndex: number) {
  //     store.commit("SET_DONE_TODO", todoIndex);
  //     store.commit('SET_SAVE_LOCALSTORAGE')
  //   },
  // },
});
</script>