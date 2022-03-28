import { createStore } from 'vuex'

export default createStore({
  state: {
    todo: "" as string,
    list: [] as Array<{ activity: string, isDone: boolean }>
  },
  getters: {
    totalTODO(state) {
      return state.list.length
    }
  },
  mutations: {
    SET_SAVE_LOCALSTORAGE(state) {
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    SET_ADD(state, payload) {
      state.list.unshift({
        activity: payload,
        isDone: false,
      });
      state.todo = ""
    },
    SET_DELETE_TODO(state, payload) {
      state.list = state.list.filter((item, index) => {
        if (index != payload) {
          return item;
        }
      });
    },
    SET_DONE_TODO(state, payload) {
      state.list = state.list.filter((item, index) => {
        if (index == payload) {
          item.isDone = !item.isDone
        }
        return item;
      });
    }
  },
  actions: {

  },
  modules: {
  }
})
