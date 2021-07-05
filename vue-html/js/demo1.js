var Child = {
  template: '<h1>定义局部组件!</h1>'
};
var vm = new Vue({
  el: '#demo',
  data: {
    type: "C",
    count: '',
    kilometers: 0, //千米
    meters: 0, //米
    content: "内容文本",
    name: '宋宋宋',
    otherClass: 'otherClass',
    htmlcode: '<b>这是使用html指令输出的html代码</b>',
    isActive: true,
    show: true,
    messageInfo: 'hello world',
    baiduUrl: 'https://www.baidu.com/',
    activeClass: "activeClass",
    errorClass: "errorClass",
    color: 'yellow',
    fontsize: 30,
    checkBoxArray: [], //checkbox选中数组
    radioArray: '宋', //单选按钮radio
    selectedArray: '',//下拉列表select
    checked: false,
    checkedNames: [],//全选与取消全选数组
    checkArray: [],//全选与取消全选数组
    checkedArr: ["宋", "王", "刘"],
    classObjStyle: {
      color: 'green',
      fontSize: '30px'
    },
    //div类的集合
    classArray: {
      title: 'title',
      perItem: 'perItem'
    },

    classObj: {
      class1: 'class1',
      class2: 'class2',
      class3: false //因为为false,所以不显示class3这个类
    },
    array: [
      {name: "song xia"},
      {name: "zhang kang"},
      {name: "li hui"},
      {name: "liu tang"}
    ],
    objInfo: {
      title: '52金融教育',
      site: 'http://www.52investing.com/',
      desc: '“52投资”2016年10月正式更名“52金融教育”，是由国内缠论界著名学者“李晓军”先生发起，通过对缠中说禅理论体系的精研，总结出更易于理解的缠论教程。更提供缠论、缠中说禅、K线理论等精品在线实战解说视频，助力学习炒股票入门基础知识'
    },
    jsonObj: [
      {
        name: '宋',
        age: '20'
      }, {
        name: '张',
        age: '30'
      }, {
        name: '刘',
        age: '40'
      }
    ],
    //即时输入并打印数据
    val: '',
    attr: []
  },
  //定义方法
  methods: {
    sayHello: function (name) {
      alert('您好，' + name);
    },
    addCount: function () {
      //如果当前count字段没有被定义，那么必须使用Vue.set
      if (!this.count) {
        Vue.set(this, 'count', '1');
      } else {
        this.count++;
      }
    },
    greet: function () {
      //this是指当前的vue对象
      alert(this.messageInfo);
    },
    //全选与取消全选
    changeAllChecked: function () {
      if (this.checked) {
        this.checkedNames = this.checkedArr;
      } else {
        this.checkedNames = [];
      }
    },
    //即时输入并打印数据
    print: function () {
      if (this.val.length > 0) {
        this.attr.push(this.val);
        this.val = '';
      }
      console.log(this.attr);
    }
  },
  //计算属性
  computed: {
    reversedMessageInfo: function () {
      //this指向vm实例
      return this.messageInfo.split('').reverse().join('');
    }
  },
  //监听属性
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.meters = val;
      this.kilometers = val / 1000;
    },
    //全选与取消全选
    checkedNames: function () {
      if (this.checkedNames.length == this.checkedArr.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  },
  //过滤器
  filters: {
    //首字母大写
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    //全部大写
    UpperCase: function (value) {
      return value.toUpperCase();
    }
  },
  //局部组件的自定义
  components: {
    'childComponent': Child
  },
  //局部自定义指令
  directives: {
    inserted: function (el) {
      el.focus();
    }
  }
})

//$watch是一个实例方法
vm.$watch('kilometers', function (newValue, oldValue) {
  document.getElementById('showValue').innerHTML =
    "修改之前的值：" + oldValue + " " + "修改之后的值：" + newValue
});

//定义一个全局组件
Vue.component('globalComponent', {
  template: '<h1>定义全局组件!</h1>'
});

//自定义一个全局指令
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
});
