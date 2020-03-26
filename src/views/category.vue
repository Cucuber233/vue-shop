<template>
  <div class="safetyInfo">
  	<div class="input_"><input type="text" name="" id="" placeholder="点击进入搜索" @click='search'/> </div>
        <div class="nav_article">
            <nav>
                <div v-for="item in nav_item" :key='item.category'>
                    <router-link :to='item.id'>
                        <p :class="item.i == index ? 'active' : ''" @click='btn(item.i)'>{{item.category}}</p>
                    </router-link>
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
            { id:'/category/new', category:'新品', i:0},
            { id:'/category/sell', category:'热销', i:1},
            { id:'/category/sum', category:'众筹', i:2},
            { id:'/category/tv', category:'电视', i:3},
            { id:'/category/computer', category:'电脑', i:4},
            { id:'/category/yes', category:'厨房电器', i:5}
        ],
        index: 0
    }
  },
  methods:{
      search(){
          this.$router.push('/home/search')
      },
      btn(i){
          this.index = i
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
    box-sizing: content-box;
}
.nav_article nav p{
    margin-top: 2em;
    color: black;
    text-decoration: none;
    padding: .3em 0 .3em 0.25em;
    text-align: center;
}
.nav_article nav .active{
    border-left: 4px solid #f39c12;
    padding: .3em 0 .3em 0;

}
.nav_article article{
    flex: 3;
    border: 1px solid red;
    height: 80%;
    width: 73%;
    background: red;
}
</style>