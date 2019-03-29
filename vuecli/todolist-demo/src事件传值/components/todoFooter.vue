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
      // perTotal计算的时候 返回undefined，查明原因
      // return this.todos.reduce(
      //   (preTotal, todo) => preTotal + (toto.complete ? 1 : 0),
      //   0
      // );

      // return this.todos.reduce(function(perTotal, todo) {
      //   if (todo.complete) {
      //     perTotal + 1;
      //   } else {
      //     perTotal + 0;
      //   }
      // }, 0);

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
