<template>
  <div class="todoList">
    <ul>
      <todoItem
        v-for="(todo,index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        :deleteItem="deleteItem"
      ></todoItem>
    </ul>
  </div>
</template>

<script>
import todoItem from "./todoItem.vue";
export default {
  name: "todoList",
  props: {
    todos: Array,
    deleteItem: Function
  },
  data() {
    return {};
  },
  components: {
    todoItem
  }
};


</script>

<style lang="scss" scoped>
@import "../assets/css/list.scss";
</style>

