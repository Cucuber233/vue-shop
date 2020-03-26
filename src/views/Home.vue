<template>
    <div>
        <div id="div_1">
            <span>大米商城</span>
            <input type="text" placeholder="点击进入搜索" @click="search">
            <button>定&nbsp;位</button>
        </div>
        <!-- <div class="swiper_"> -->
            <swiper-tab :images='swiperimg' />
        <!-- </div> -->
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
import swiperTab from "../components/swiper_tab/swiper.vue";
import tabControl from "../components/tab_control/tabControl.vue";
export default {
    name: 'home',
    components:{ swiperTab, tabControl },
    mounted(){
        console.log(this.$route.path)
    },
    methods:{
        search(){
            this.$router.push('/home/search')
        }
    },
    data(){
        return{
            swiperimg: [
                "../../../assets/images/swipers/tu0.jpg",
                "../../../assets/images/swipers/tu2.jpg",
                "../../../assets/images/swipers/tu3.jpg"
            ]
        }
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
    width: 99%;
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
</style>