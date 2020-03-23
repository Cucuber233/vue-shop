<template>
    <div>
        <div id="div_1">
            <span>大米商城</span>
            <input type="text" placeholder="点击进入搜索" @click="search">
            <button>定&nbsp;位</button>
        </div>
        <!-- <div class="swiper_"> -->
            <swiper-tab />
        <!-- </div> -->
        <tab-control />
    </div>
</template>

<script>
import swiperTab from "../components/swiper_tab/swiper.vue";
import tabControl from "../components/tab_control/tabControl.vue";
export default {
    name: 'home',
    components:{ swiperTab, tabControl },
    methods:{
        search(){
            this.$router.push('/home/search')
        }
    },
    data(){
        return{}
    }
}
</script>

<style lang="less">
*{
    padding: 0;
    margin: 0;
}
#div_1{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 30px;
    background-color: #bdc3c7;
}
span{
    flex: 2;
    font-size: 20px;
    color: #9b59b6;
}
input{
    flex: 5;
    height: 23px;
    width: 40%;
}
button{
    color: #3498db;
    width: 50px;
    height: 27px;
}
// .swiper_{
//     width: 100%;
//     height: 200px;
//     overflow: hidden;
// }
</style>