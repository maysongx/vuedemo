# 1.  开始
```
# 下载模板
git clone https://github.com/tastejs/todomvc-app-template.git

# 进入指定的项目目录
cd todomvc

# 安装项目依赖
npm install

# 打开项目中的 index.html 预览模板

```

> 注意：项目开始时，记得下载vue npm install vue

安装broswer-sync  浏览器同步测试工具

1. 安装依赖

  ```shell
# 也可以 npm i -D browser-sync
npm install --save-dev browser-sync
  ```

2. 配置 scripts

  ```json
"scripts": {
  "dev": "browser-sync start --server --files \"*.html, css/*.css, js/*.js\"",
  "start": "npm run dev"
}
  ```

3. 启动开发服务

``` shell
# 或者 npm start
npm run dev
```