<template>
  <div class="container" style="margin-top: 20px">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">SIMPLE TODO APP</h5>
        <div class="row">
          <div class="col-10">
            <input
              v-model="todoa"
              type="text"
              class="form-control"
              @keyup.enter="add"
            />
          </div>
          <div class="col-2">
            <button class="btn btn-success" @click="add">ADD</button>
          </div>
        </div>
        <List :todos="main.list" @deleteTodo="deleteTodo" @doneTodo="doneTodo" />
        <br />
        <small>Total TODO : {{ main.totalTODO }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import { useStore } from '@/store/index-pinia'
import List from "./components/List.vue";
export default defineComponent({
  components: { List },
  setup(){
    const {addStore, deleteTodoStore, doneTodoStore } = useStore()
    let list = useStore().list
    const todoa = ref<string>("")
    onMounted(() => {
      const items = localStorage.getItem("todos");
      list = items ? JSON.parse(items) : [];
    })

    function add() {
      addStore(todoa.value);
      todoa.value = ""
    }
    function deleteTodo(todoIndex: number) {
      deleteTodoStore(todoIndex);
    }
    function doneTodo(todoIndex: number) {
      doneTodoStore(todoIndex);
    }
    return {
      todoa,list,main: useStore(),add,deleteTodo, doneTodo,
    }
  }
});
</script>