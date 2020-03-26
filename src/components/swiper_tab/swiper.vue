<template>  
    <div id="img_swiper">
        <div class="img_item" :style="{left:move+'px'}">
            <img class='img_' v-for="(item,index) in images" :key='index' :src="images[index]" alt="无图片">
        </div>
    </div>
</template>

<script>
export default {
    name: 'swiper',
    props: {
        images: {
            type: Array
        }
    },
    mounted(){
           setInterval(() => {
               if(-this.fullWidth*2 -1 < this.move){
                   this.move = this.move - this.fullWidth
               }else{
                   this.move = 0
               }
           }, 3000)
           console.log(this.images)
    },
    data(){
        return{
            move: 0,
            fullWidth: document.documentElement.clientWidth,
        }
    }
}
</script>

<style lang="less">
body{
    padding: 0;
    margin: 0;
}
#img_swiper{
    position: relative;
    width: 100%;
    height: 12.3em;
    margin-top: .2em;
    overflow: hidden;
}
#img_swiper .img_item{
    position: absolute;
    display: flex;
    transition: linear .8s;
    width: 300%;
    height: 100%;
}
#img_swiper .img_{
    width: 33.33%;
    height: 12.3em;
    border-radius: 2%;
}
</style>