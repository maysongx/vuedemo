Vue.component('greeting', {
    // template里面的html结构，必须包裹在 一父容器中
    template: `
     <p class="box">
           <span>大家好，给大家介绍一下，我是{{name}}</span>
           <button @click="changeName">改名</button>
     </p>
     `,
    //data是一个函数，必须有返回值，返回值是一个对象
    data: function () {
        return {
            name: 'Song Xia'
        }
    },
    methods: {
        changeName: function () {
            this.name = "Herry"
        }
    }
});
new Vue({
    el: '#one',
})
new Vue({
    el: '#two',
})
