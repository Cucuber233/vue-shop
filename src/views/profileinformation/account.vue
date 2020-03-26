<template>
    <div>
        <button @click="backPage">返回</button>
        <p>{{name}}</p>
        <p>{{lastpath}}</p>
    </div>
</template>

<script>
export default {
    name: 'info',
    methods:{
        backPage(){
            // console.log(this.lastpath)
            // this.$router.push({ name: this.lastpath, params:{ lastpath: this.$route.path} })
            this.$router.back()
        }
    },
    data(){
        return{
            name: this.$route.params.flag,
            lastpath: this.$route.params.lastpath
        }
    }
}
</script>

<style lang="less">

</style>