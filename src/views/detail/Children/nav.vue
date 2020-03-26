<template>
    <div class="nav_detail">
        <img src="./back.png" alt="无图片" @click="back">
        <nav v-for='(item,index) in nav' :key='index'>
           <p :class="index == i ? 'active' : ''" @click="choose(index)">{{item}}</p> 
        </nav>
    </div>
</template>

<script>
export default {
   name: 'navDetail',
   methods:{
       back(){
           this.$router.back()
       },
       choose(index){
           this.i = index
       }
   },
   data(){
       return{
           nav: ['商品','参数','评论','推荐'],
           i: 0
       }
   }
}
</script>

<style lang="less">
.nav_detail{
    display: flex;
}
.nav_detail img{
    width: 1.1em;
    height: 1.1em;
    margin-top: 1.2em;
}
nav{
    flex: 1;
    margin-left: 1.2em;
}
.active{
    color: #e67e22;
}
</style>