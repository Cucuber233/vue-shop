<template>
  <div class="safetyInfo">
  	<div class="input_"><input type="text" name="" id="" placeholder="点击进入搜索" @click='search'/> </div>
        <div class="nav_article">
            <nav>
                <div v-for="item in nav_item" :key='item.category'>
                    <p @click='choose(item.id)'>{{item.category}}</p>
                </div>
            </nav>
            <article>
                <router-view />
            </article>
        </div> 
  </div>
</template>

<script>
export default {
	name: 'category',
  data () {
    return {
        nav_item: [
            { id:'new', category:'新品'},
            { id:'sell', category:'热销'},
            { id:'sum', category:'众筹'},
            { id:'tv', category:'电视'},
            { id:'computer', category:'电脑'},
            { id:'yes', category:'厨房电器'}
        ],
    }
  },
  mounted(){
      this.$router.replace('/new')
  },
  methods:{
      search(){
          this.$router.push('/home/search')
      },
      choose(v){
          this.$router.push(v)
      }
  }
}
</script>

<style lang="less">
*{
    padding: 0;
    margin: 0;
}
.safetyInfo .input_{
    background: #bdc3c7;
    padding: .4em;
}
.safetyInfo input{
    margin-top: .1em;
    border-radius: 5%;
    width: 98%;
    height: 2em;
}
.nav_article{
    display: flex;
}
.nav_article nav{
    flex: 1;
    border-right: 1px solid #bdc3c7;
    padding-bottom: 70%;
}
.nav_article nav p{
    margin-top: 2em;
}
.nav_article article{
    flex: 3;
    border: 1px solid red;
    height: 80%;
    width: 73%;
    background: red;
}
</style>