<template>
    <div>
        <div id="control">
            <div><hr /></div>
            <div class="item_control">
                <li v-for="(item,index) in data" :key='index'>
                    <span :class="index == active_index ? 'active_control' : 'contral'" @click='tab_control(index)'>{{item}}</span>
                </li>
            </div>
            <div class="hr"><hr /></div>  
        </div>
        <goods-item :active-index='Number(active_index)' />
    </div>
</template>

<script>
import goodsItem from '../goods/goods_item.vue'
export default {
    name: 'tanControl',
    components: {goodsItem },
    methods: {
        tab_control(i){
            this.active_index = i
        }
    },
    data(){
        return{
            active: false,
            active_index: '',
            data: ['精选', '热卖', '优惠']
        }
    }
}
</script>

<style lang="less">
#control{
    margin-top: .4em;
    background-color: #f1c40f;
    box-sizing: content-box;
}
.item_control{
    margin-top: .4em;
    box-sizing: content-box;
    display: flex;
    justify-content: space-around;
}
#control .hr{
    margin-top: .5em;
}
.item_control li{
    list-style: none;
}
.active_control{
    transition: .4s;
    padding: 0 .3em .4em .3em;
    border-bottom: 2px solid red;
    color: #e74c3c;
}
.contral{
    padding: 0 .3em .4em .3em;
}
</style>