<template>
    <div class="leftInfo">
        <div class="perItem">
            <p>用户名</p>
            <input type="text" placeholder="请输入用户名" v-model="name">
        </div>
        <div class="perItem">
            <p>评论内容</p>
            <textarea placeholder="请输入评论内容" name="" id="" cols="30" rows="10" v-model="content"></textarea>
        </div>
        <button @click="add">提交</button>
    </div>
</template>

<script>
    export default {
        name: "add",
        props: {
            addComment: {
                type: Function,
                required: true
            }
        },
        data() {
            return {
                name: '',
                content: '',
                //存储的格式文本值，必要的时候需要转换格式
                //如果数据为空，则是空数组
                todos: JSON.parse(window.localStorage.getItem('key_value') || '[]'),
            }
        },
        methods: {
            /*
            * 1. 检查用户输入的数据的合法性
            * 2. 根据输入的数据，封装成功一个comment对象
            * 3. 将comment对象添加到comments数组中
            * 4. 清除输入
            * */
            add() {
                let name = this.name;
                let content = this.content;
                // 1. 检查用户输入的数据的合法性
                if (!name || !content) {
                    alert('输入的数据有问题，请检查重新输入！');
                    return;
                }
                //2. 根据输入的数据，封装成功一个comment对象
                let comment = {name, content}
                //3. 将comment对象添加到comments数组中
                this.addComment(comment);
                // 4. 清除输入
                this.name = '';
                this.content = '';
            }
        },
        watch: {//设置深度监视
            todos: {
                keep: true,
                handler: function (newValue, OldValue) {
                    //将todos最新的值的JSON数据保存到localStroage中
                    window.localStorage.setItem('key_value', JSON.stringify(newValue))
                }
            }
        }
    }
</script>

<style scoped>
    /*左侧样式*/
    .leftInfo {
        float: left;
        width: 300px;
    }

    .leftInfo .perItem input[type='text'] {
        width: 234px;
        height: 20px;
    }
</style>