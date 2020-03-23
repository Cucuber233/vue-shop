<template>
    <div class="tab-item" @click='tabBarClick'>
        <div v-if='!isActive'><slot name='item-icon'></slot></div> 
        <div v-else><slot name='item-icon-active'></slot></div>
        <div :class="{active: isActive}"><slot name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
    name: 'tab-bar',
    props: {
        path: String
    },
    methods:{
        tabBarClick(){
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    data(){
        return {}
    }
}
</script>

<style scoped lang="less">
.tab-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 49px;
    box-sizing:content-box;
    padding-top: 6px;

    img {
        width: 28px;
        height: 28px;
        vertical-align: middle;
    }
    .active{
        color: #eb4d4b;
    }
}
</style>