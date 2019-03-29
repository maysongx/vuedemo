var demo = new Vue({
    el: '#demo',
    data: {
    },
    methods:{
        changeShow:function (obj) {
            one.isShow=false;
            two.isShow=false;
            if(obj=='one'){
                one.isShow=true;
            }else{
                two.isShow=true;
            }
            return;
            obj.isShow=!obj.isShow;
        }
    }
})

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'vue app one的内容',
        isShow:true
    },
    computed:{
        greet:function () {
            return "Hello App One"
        }
    }
})

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'vue app two的内容',
        isShow:false
    },
    computed:{
        greet:function () {
            return "Hello App Two"
        }
    }
})

