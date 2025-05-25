<script setup>
import { useStore } from "vuex";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const myStore = useStore();

const incrementCount = () => {
  myStore.dispatch("a/increaseAction", 5);
};
const decrementCount = () => {
  myStore.dispatch("a/decrementAction", 5);
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Tôi không coi nó là mục tiêu cuối cùng nhưng tôi coi nó là một người bạn
      công nghệ cùng tôi trên con đường tình yêu lớn
    </h3>
    <button @click="incrementCount">Bấm nút để tăng số lượng</button>
    <button @click="decrementCount">Bấm nút để giảm số lượng</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
