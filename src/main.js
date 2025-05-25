import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import myStore from "./store/index.js";
// tạm thời code vuex ở đây
const createST = createStore({
  modules: {
    a: myStore,
  },
});
const app = createApp(App);
app.use(createST);
app.mount("#app");
