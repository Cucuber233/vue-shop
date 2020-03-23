<template>  
    <div id="img_swiper">
        <div id="img_item" :style="{left:move+'px'}">
            <img src="../../../assets/images/swipers/tu0.jpg" alt="0">
            <img src="../../../assets/images/swipers/tu2.png" alt="2">
            <img src="../../../assets/images/swipers/tu3.png" alt="3">
        </div>
    </div>
</template>

<script>
export default {
    name: 'swiper',
    mounted(){
           setInterval(() => {
               if(-this.fullWidth*2 + 1 < this.move){
                   this.move = this.move - this.fullWidth
               }else{
                   this.move = 0
               }
           }, 5000)
    },
    data(){
        return{
            move: 0,
            fullWidth: document.documentElement.clientWidth
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
    width: 100%;
    height: 200px;
    margin-top: .2em;
    overflow: hidden;
}
#img_swiper #img_item{
    display: flex;
    transition: linear .8s;
    width: 300%;
    height: 150px;
}
#img_swiper #img_item img{
    width: 33.33%;
    height: 200px;
    border-radius: 2%;
}
</style>