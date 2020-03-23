<template>
    <div>
        <div class="goods_top">
            <article v-for='(item, index) in goods[activeIndex].list' :key='index'>
                <div class="images"><img :src="item.show.img" alt="图片加载失败"></div>
                <p>{{item.title}}</p> 
                <p>￥&nbsp;{{item.price}}</p> 
            </article>
        </div>
    </div>
</template>

<script>
import { goodsRequest } from '../../service/Api/goods_request.js';
import server from '../../service/index.js';
export default {
    name: 'goods_item',
    props: {
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    mounted(){   
        this.begin()
    },
    methods:{
        begin(){
            for(let i=0 ; i<this.goods.length; i++){
                goodsRequest(this.goods[i].type,i+1).then(res => {
                    this.goods[i].list = res.data.data.list
                    //console.log(res.data.data.list)
            })
            }
        },
        request(type,page){
            // goodsRequest(type,page).then(res => {
            //     console.log(res)
            // })
        }
    },
    data(){
        return{
            goods: [
                {type: 'pop', list: []},
                {type: 'new', list: []},
                {type: 'sell', list: []}
            ],
            page: 1
        }
    }
}
</script>

<style lang="less">
.goods_top{
    margin-top: .3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
article{
    width: 46%;
    height: 20em;
}
article .images{
    width: 100%;
    height: 17em;
    overflow: hidden;
}
article .images img{
    width: 100%;
    border-radius: 3%;
}
article p{
    font-size: .9em;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: .5em;
}
</style>