var vm = new Vue({
    el: '#md1',
    data:{
        msg: 'vue的数据',
        arrs:[{title:'第一个列表'}],
        val:''
    },
    methods:{
        // 添加列表
        add:function(){
            // 如果input绑定的val值不是空，就在arrs这个数组加入val的值
            if(this.val !== ''){
                this.arrs.push({title:this.val})
            }
            else{
                confirm('请输入数据')
            };
            //再把输入框清空
            this.val = '';
        },
        // 删除功能
        del:function(item){
            var index = this.arrs.indexOf(item);
            this.arrs.splice(index,1);
        }
    }
})