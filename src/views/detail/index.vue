<template>
    <div>
        <nav class="detail_nav">
           <nav-detail /> 
        </nav>
        <swiper-img :images='images_swiper'/>
        <div class="top">
            <span>{{itemInfo.title}}</span>
            <br>
            <div class="price">{{itemInfo.price}}&nbsp;<span>优惠价</span></div>
            <div class="colums">
                <span v-for='item in itemInfo.columns' :key='item'>{{item}}</span>
            </div>
            <hr>
            <div class="shopInfo">
                <div class="services" v-for='(item,index) in services' :key='index' v-if='index > 1 ? true : false'>
                    <img :src="item.icon" alt="无图片">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import navDetail from './Children/nav'
import getDetail  from './Children/request.js'
import swiperImg from '@/components/swiper_tab/swiper.vue'

import server from 'request/index'


export default {
   name: 'detail',
   components: { navDetail,  swiperImg},
   created(){
       
        this.getdetail('1m70y5k').then(res => {
            this.images_swiper = res.data.result.itemInfo.topImages
            this.itemInfo.title = res.data.result.itemInfo.title
            this.itemInfo.price = res.data.result.itemInfo.oldPrice
            this.itemInfo.columns = res.data.result.columns
            this.services = res.data.result.shopInfo.services
            console.log(res.data.result)
        })

        // this.iid = this.$route.params.iid
        // getDetail(this.iid).then(res => {
        //     this.images_swiper = res.data.result.itemInfo.topImages
        //     this.itemInfo.title = res.data.result.itemInfo.title
        //     this.itemInfo.price = res.data.result.itemInfo.oldPrice
        //     this.itemInfo.columns = res.data.result.columns
        //     this.services = res.data.result.shopInfo.services
        //     console.log(res.data.result)
        //})
   },
   methods:{
       getdetail(iid){
        return server.request({
        url: '/detail',
        method: 'get',
        params: {
            iid
        }
    })
}
   },
   data(){
       return{
           iid: null,
           images_swiper: null,
           itemInfo: {
               title: '',
               price: '',
               columns: ''
            },
            services: {}
       }
   }
}
</script>

<style lang="less">
body{
    background-color: #ecf0f1;
}
.top{
    margin: .2em;
}
.top span{
    // text-align:left;
    // text-align:justify;
    font-weight: 600;
}
.top .price{
    margin: .4em 0 0 .2em;
    color: #e67e22;
    font-size: 1.3em;
}
.top .price span{
    border-radius: 30%;
    background-color: #f1c40f;
    margin: .4em 0 0 .2em;
    color: #27ae60;
    font-size: .75em;
    text-align: center;
}
.colums{
    display: flex;
    justify-content: space-between;
    margin: 1em 1em;
    font-size: .5em;
    color: #bdc3c7;
}
.shopInfo{
    display: flex;
    justify-content: space-between;
}
.shopInfo .services{
    display: inline-block;
    white-space: nowrap;
    display: flex;
    align-items: center;
}
.shopInfo .services img{
    height: 30%
}
.shopInfo .services span{
    font-weight: 500;
}
</style>