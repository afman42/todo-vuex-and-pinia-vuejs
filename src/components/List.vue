<template>
  <div style="margin-top: 20px;">
    <ul class="list-group">
      <li v-for="(todo, index) in todos" :key="index" class="list-group-item">
        <div class="row">
          <div class="col">
            <span v-if="todo.isDone">
              <del>{{ todo.activity }}</del>
            </span>
            <span v-else>{{ todo.activity }}</span>
          </div>
          <div class="col-auto">
            <div class="row gx-2">
              <div class="col">
                <button @click="done(index)" v-if="todo.isDone == false" class="btn btn-info">Done</button>
                <button @click="done(index)" v-else class="btn btn-warning">Undone</button>
              </div>
              <div class="col">
                <button @click="deleteTODO(index)" class="btn btn-danger">
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    todos: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
  methods: {
    deleteTODO (index: number) {
      this.$emit("deleteTodo", index);
    },
    done (index: number) {
      this.$emit("doneTodo", index);
    }
  }
  // setup(props, { emit }) {
  //   const deleteTODO = (index) => {
  //     emit("deleteTodo", index);
  //   };
  //   const done = (index) => {
  //     emit("doneTodo", index);
  //   };
  //   return { deleteTODO, done };
  // },
});
</script>