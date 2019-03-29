/*
* 自定义插件：
* Vue.js 的插件应该有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
* */

(function () {
    //需要向外暴露的插件对象
    const MyPlugin = {};
    //插件对象必须有一个install()方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log("Vue函数对象的方法或属性myGlobalMethod()")
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode) {
                console.log("自定义指令my-directive：" + binding.value);
            }
        })

        // 3. 注入组件
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log("Vue实例对象方法$myMethod()")
        }
    }
    //向外暴露插件
    window.MyPlugin = MyPlugin;
})()