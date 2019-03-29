# Vue脚手架
    Vue脚手架是用来创建vue项目的工具包，主要是通过webpack搭建的开发环境
    使用ES6规范：不用担心浏览器是否兼容的问题，因为webpack里面的loader会自动将es6规范转换为es5，大部分浏览器都是可以识别的
    可以打包和压缩JS为一个文件
    项目文件在环境中编译，而不是在浏览器
    实现页面的实时刷新
    
# 使用Vue脚手架搭建项目步骤    
## 1. 全局安装vue-cli
    注：vue-cli只需安装一次，判断是否已经安装：vue --version 或 vue -V
    cnpm install --global vue-cli
## 2. 初始化项目
    vue init webpack VueDemoName
    vue init webpack-simple VueDemoName（创建一个简洁的模板）
    期间有相关的配置，如果不想配置，可以直接enter
    会自动生产package.json配置文件
## 3. 进入项目目录    cd VueDemoName(项目目录名称)   
## 4. 安装模块和相关依赖
    cnpm install     
### 4. 开发环境运行
    cnpm run dev
### 5. 生产环境打包发布
    cnpm run build    
    npm install -g serve
    serve dist
    http://localhost:5000
