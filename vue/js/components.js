//自定义一个全局指令 页面载入是，当前元素获取焦点
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
});
//定义一个全局组件
Vue.component('to_do_list', {
    props:['placeholdertxt','name'], //传递的参数
    template: '<div class="box">\n' +
    '{{name}}'+
    '        <div class="input">\n' +
    '            <input type="text" :placeholder="placeholdertxt" v-model="text" @keyup.13="add()">\n' +
    '        </div>\n' +
    '        <div class="btns">\n' +
    '            <input type="button" value="全部" @click="changeStatus(-1)" v-bind:class="{\'active\':status==-1}">\n' +
    '            <input type="button" value="已完成" @click="changeStatus(1)" v-bind:class="{\'active\':status==1}">\n' +
    '            <input type="button" value="未完成" @click="changeStatus(0)" v-bind:class="{\'active\':status==0}">\n' +
    '        </div>\n' +
    '        <ul class="list">\n' +
    '            <li v-for="m in computeddata">\n' +
    '                <div v-if="m.edit==true">\n' +
    '                    <span v-bind:class="{\'active2\':m.state==1}" v-bind:state="m.state" class="opt"\n' +
    '                          @click="chengeState(m)"></span>\n' +
    '                    <p @dblclick="edit(m)">{{m.text}}</p>\n' +
    '                    <span v-bind:id="m.id" class="del" @click="del(m.id)">删除</span>\n' +
    '                </div>\n' +
    '                <div v-else>\n' +
    '                    <input v-focus type="text" v-model="m.text" @blur="update(m)">\n' +
    '                </div>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <div v-show="all.length==0">没有数据</div>\n' +
    '\n' +
    '    </div>',
    //data是一个函数（注意）
    data: function () {
        return {
            text: '',
            //localStorage 本地缓存
            all: localStorage.dataList?JSON.parse(localStorage.dataList):[],
            status: '-1', //all全部  0未完成  1已完成
        }
    },
    methods: {
        add: function () {
            if (this.text.length > 0) {
                var obj = {};
                obj.text = this.text;
                obj.id = Math.random() + new Date().getTime(); //随机生成id
                obj.state = 0;  //0 表示未完成       1 表示已完成
                obj.edit = true; //是否可以编辑
                this.all.push(obj);
                this.text = '';
                //将数据缓存到本地 而且接受类型是string
                localStorage.dataList=JSON.stringify(this.all);
            }
        },
        del: function (id) {
            this.all = this.all.filter(function (val) {
                if (val.id != id) {
                    return val;
                }
            });
            //将数据缓存到本地
            localStorage.dataList=JSON.stringify(this.all);
        },
        edit: function (obj) {
            obj.edit = !obj.edit;
            //将数据缓存到本地
            localStorage.dataList=JSON.stringify(this.all);
            //等同于下面的
            // if (obj.edit = false) {
            //     obj.edit = true;
            // } else {
            //     obj.edit = false;
            // }
        },
        update: function (obj) {
            obj.edit = !obj.edit;
            //将数据缓存到本地
            localStorage.dataList=JSON.stringify(this.all);
        },

        changeStatus: function (val) {
            this.status = val;
            //将数据缓存到本地
            localStorage.dataList=JSON.stringify(this.all);
        },
        //修改状态
        chengeState: function (item) {
            if (item.state == 0) {
                item.state = 1;
            } else {
                item.state = 0;
            }
        }
    },
    computed: {
        computeddata: function () {
            var m;
            var vm = this.status; //传递参数
            if (this.all.length > 0) {
                //val：当前对象   index：当前下标  curObj：过滤后的这个对象
                m = this.all.filter(function (val, index, obj) {
                    console.log(vm);
                    if (vm == '-1') {
                        return obj;
                    }
                    else {
                        if (vm == val.state) {
                            return obj;
                        }
                    }
                });
            }
            return m;
        }
    }
});





