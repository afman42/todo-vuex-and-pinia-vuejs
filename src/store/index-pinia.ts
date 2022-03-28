import { useStoreIndex } from "@/types";
import { defineStore } from "pinia";

export const useStore = defineStore('index', {
  state: (): useStoreIndex => ({
      list: []
  }),
  getters: {
    totalTODO: (state) => {
      return state.list.length
    }
  },
  actions: {
    saveLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.list));
    },
    addStore(payload: any) {
      this.list.unshift({
        activity: payload,
        isDone: false,
      });
      this.saveLocalStorage()
    },
    deleteTodoStore(payload: number) {
      this.list = this.list.filter((item: any, index: number) => {
        if (index != payload) {
          return item;
        }
      });
      this.saveLocalStorage()
    },
    doneTodoStore(payload: number) {
      this.list = this.list.filter((item: any, index: number) => {
        if (index == payload) {
          item.isDone = !item.isDone
        }
        return item;
      });
      this.saveLocalStorage()
    }
  }
})
