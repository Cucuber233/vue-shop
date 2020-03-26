<template>
   <div class="tab">
       <tab-bar-item path='/home/goodsItem'>
            <img slot="item-icon" src='../../../assets/images/tab-bar/home.png' />
            <img slot="item-icon-active" src='../../../assets/images/tab-bar/home_active.png' />
            <div slot="item-text">首页</div>
        </tab-bar-item>  
        <tab-bar-item path='/cart'>
            <img slot="item-icon" src='../../../assets/images/tab-bar/cart.png' />
            <img slot="item-icon-active" src='../../../assets/images/tab-bar/cart_active.png' />
            <div slot="item-text">购物车</div>
        </tab-bar-item>  
        <tab-bar-item path='/category'>
            <img slot="item-icon" src='../../../assets/images/tab-bar/category.png' />
            <img slot="item-icon-active" src='../../../assets/images/tab-bar/category_active.png' />
            <div slot="item-text">分类</div>
        </tab-bar-item>  
        <tab-bar-item path='/profile'>
            <img slot="item-icon" src='../../../assets/images/tab-bar/profile.png' />
            <img slot="item-icon-active" src='../../../assets/images/tab-bar/profile_active.png' />
            <div slot="item-text">我</div>
        </tab-bar-item>  
    </div>
</template>

<script>
import tabBarItem from './tab_bar_item.vue';
export default {
    name: 'tab-bar',
    components: { tabBarItem },
    methods:{},
    data(){
        return {
            
        }
    }
}
</script>

<style scoped lang="less">
.tab{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #bdc3c7;
    box-sizing: content-box;
}
</style>