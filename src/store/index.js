const myStore = {
    namespaced: true,
  state() {
    return {
      count: 0,
      name: "Hello Your - Vuex",
      listWelcome: {
        item1: "Học tập",
        item2: "Chăm chỉ",
        item3: "Kỷ luật",
        item4: "cẩn thận",
        item5: "Phục vụ lợi ích chung và cao thượng",
      },
    };
  },

  getters: {
    getCount(state) {
      return state.count;
    },
    getName(state) {
      return state.name;
    },
    getListWelcome(state) {
      return state.listWelcome;
    },
    getInGetter(state, getters) {
      return `Đây là get trong getter: ${getters.getName} -> ${getters.getListWelcome.item1}`;
    },
  },
  mutations: {
    increase(state, myInput) {
      state.count += myInput;
    },
    decrement(state, myInput) {
      state.count -= myInput;
    },
  },
  actions: {
    increaseAction(context, myInput) {
      context.commit("increase", myInput);
    },
    decrementAction(context, myInput) {
      context.commit("decrement", myInput);
    },
  },
};

export default myStore;
