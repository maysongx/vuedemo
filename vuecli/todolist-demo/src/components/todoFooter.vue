 <template>
  <div class="todoFooter">
    <input type="checkbox" v-model="isAllCheck">
    <span>已完成{{completeLength}}</span>
    <span>全部{{todos.length}}</span>
    <button class="btn" v-show="completeLength" @click="deletCompleteTodos">清除已完成的任务</button>
  </div>
</template>

<script>
export default {
  name: "todoFooter",
  props: {
    todos: Array,
    deletCompleteTodos: Function,
    selectAllTodos: Function
  },
  data() {
    return {};
  },
  computed: {
    completeLength() {
      let toatal = 0;
      this.todos.forEach(todo => {
        if (todo.complete) {
          toatal += 1;
        }
      });

      return toatal;
    },
    isAllCheck: {
      get() {
        return (
          this.completeLength === this.todos.length && this.completeLength > 0
        );
      },
      //value是当前checbox的值
      set(value) {
        this.selectAllTodos(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/footer.scss";
</style>
