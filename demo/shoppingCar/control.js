var app=new Vue({
    el:'#app',
    data:{
        //以下数据本应从服务器获取
        list:[
            {
                id:1,
                name:'iPhone7',
                price:6188,
                count:1
            },
            {
                id:2,
                name:'iPhone X',
                price:7188,
                count:1
            },
            {
                id:3,
                name:'MacBook Pro',
                price:21488,
                count:1
            }
        ]
    },
    computed:{
        totalPrice:function(){
            var total=0;
            for(var i=0;i<this.list.length;i++){
                var item=this.list[i];
                total+=item.price*item.count;            
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/,',');
        }
    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count===1)return;
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        }
    }
});