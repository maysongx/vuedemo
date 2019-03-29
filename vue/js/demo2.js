new Vue({
    el: '#demo2',
    //data是一个对象
    data: {
        name: 'Song Xia',
        website: 'https://www.baidu.com/',
        websiteTag: " <a href='https://www.baidu.com/'>百度一下</a>",
        age: 20,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        changeColor: false,
        changeLength: false,
        dataArray: ['song', 'xia', 'hh'],
        dataObj: [
            {name: 'song1', age: "10"},
            {name: 'song2', age: "20"},
            {name: 'song3', age: "30"}
        ],
        obj:{
            name:'songxia',
            age:'20'
        }


    },
    methods: {
        greet: function (time) {
            return "Good " + time + "!!! " + this.name
        },
        add: function () {
            this.age++;
        },
        reduce: function () {
            this.age--;
        },
        updateXY: function (event) {
            console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        alert: function () {
            alert('Hello World !!!');
        },
        logName: function () {
            console.log('你正在输入姓名:' + this.$refs.name.value);
        },
        logAge: function () {
            console.log('你正在输入年龄：' + this.$refs.age.value);
        },
        AddToA: function () {
            console.log('触发了A方法');
            return this.a + this.age;
        },
        AddToB: function () {
            console.log('触发了B方法');
            return this.b + this.age;
        }
    },
    computed: {
        AddToAComputed: function () {
            console.log('触发了A方法--计算属性');
            return this.a + this.age;
        },
        AddToBComputed: function () {
            console.log('触发了B方法--计算属性');
            return this.b + this.age;
        },
        computedClass: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});


