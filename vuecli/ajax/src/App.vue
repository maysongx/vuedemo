<template>
  <div id="app">
    <h1 v-if="!repoUrl">Loading...</h1>
    <h1 v-else>
      Most start repo is
      <a :href="repoUrl">{{ repoName }}</a>
    </h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      repoUrl: '',
      repoName: ''
    };
  },

  //执行异步操作
  mounted() {
    // 通过 vue/组件对象发送 ajax 请求
    const url = 'https://api.github.com/search/repositories?q=vu&sort=stars';
    //axios请求数据
    axios.get(url).then(
      response => {
        //请求数据成功：response.data是返回的结果数据
        const dataObj = response.data;
        //获取最受欢迎的项目
        const mostPro = dataObj.items[0];
        this.repoUrl = mostPro.html_url;
        this.repoName = mostPro.name;
      },
      response => {
        //请求数据失败：response.statusText返回的错误信息
        console.log(response.statusText);
      }
    );

    // //vue - ressource请求数据方法
    // this.$http.get(url).then(
    //   response => {
    //     //请求数据成功：response.data是返回的结果数据
    //     const dataObj = response.data;
    //     //获取最受欢迎的项目
    //     const mostPro = dataObj.items[0];
    //     this.repoUrl = mostPro.html_url;
    //     this.repoName = mostPro.name;
    //   },
    //   response => {
    //     //请求数据失败：response.statusText返回的错误信息
    //     console.log(response.statusText);
    //   }
    // );
  }
};
</script>
