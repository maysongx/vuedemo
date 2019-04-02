# Vue中常用的2个ajax请求库  vue-resource axios
    vue-resource: vue插件, 非官方库，多用于vue1.x
    axios: 通用的ajax请求库,官方推荐，多用于vue2.x

#vue-resource使用步骤
#### 1. 下载安装模块
    cnpm install --save vue-resource
#### 2. 一般在main.js文件中，引入并使用模块
    // 引入模块
    import VueResource from 'vue-resource'
    // 注册声明使用
    Vue.use(VueResource)
#### 3. 在任意组件中使用 *.vue        
```
  //执行异步操作
  mounted() {
    // 通过 vue/组件对象发送 ajax 请求
    const url = 'https://api.github.com/search/repositories?q=vu&sort=stars';
    this.$http.get(url).then(
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
  }
```            

# axios使用步骤
#### 1. 下载安装模块
    cnpm install --save axios  
#### 2. 一般在main.js文件中，引入并使用模块
    // 引入模块
    import axios from 'axios'
#### 3. 发送ajax请求   
```
//执行异步操作
  mounted() {
    // 通过 vue/组件对象发送 ajax 请求
    const url = 'https://api.github.com/search/repositories?q=vu&sort=stars';
    //axios请求数据
    axios.get(url).then(
      response => {
        //请求数据成功：response.data是返回的结果数据
        const dataObj = response.data;
      },
      response => {
        //请求数据失败：response.statusText返回的错误信息
        console.log(response.statusText);
      }
    );
  }
```        

# 简介
#### axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：
    * 从浏览器中创建 XMLHttpRequest
    * 从 node.js 发出 http 请求
    * 支持 Promise API
    * 拦截请求和响应
    * 转换请求和响应数据
    * 取消请求
    * 自动转换JSON数据
    * 客户端支持防止 CSRF/XSRF
#### 下载安装            

      