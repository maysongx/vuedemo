<template>
  <li :style='{backgroundColor:bgColor}' class="item" ref="index" @mouseenter="Hideshow(true)" @mouseleave="Hideshow(false)">
    <label for>
      <input type="checkbox" v-model="todo.complete">
      <span>{{todo.title}}</span>
    </label>
    <button v-show="isShow"  @click="deleteItemByIndex(index)">删除</button>
  </li>
</template>

<script>
/*
onmouseenter
onmouseleave
over和out方法有事件冒泡的干扰
https://www.cnblogs.com/jingh/p/5771479.html
onmouseover
onmouseout
*/
export default {
  name: "todoItem",
  props: {
    todo: Object,
    index: Number
  },
  data() {
    return {
      bgColor: "white", //指定默认的背景颜色
      isShow: false
    };
  },
  methods: {
    //删除项
    deleteItemByIndex(index) {
      if (confirm(`你确定要删除： ${this.todo.title}   吗？`)) {
				this.$store.dispatch('deletetodoItem',index)
      }
    },
    Hideshow(value) {
      this.isShow = value;
      if (value) {
        this.bgColor = "red";
      } else {
        this.bgColor = "white";
      }
    }
  }
};
</script>
<style>
.item {
  height: 40px;
  line-height: 40px;
  margin: 10px 0px;
  list-style-type: none;
}
</style>
