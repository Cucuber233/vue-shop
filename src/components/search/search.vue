<template>
    <div id='search_div'>
        <div>
            <input type="text" placeholder="请输入搜索内容" v-model='search' @input='search_input'>
            <button @click="btn_search">搜&nbsp;&nbsp;索</button>
        </div>
        <ul v-for="list in searchData" :key='list.name'>
            <li>
                <span>{{list.name}}</span>
                <span>{{list.depart}}</span>
            </li>
  	    </ul>
    </div>
</template>

<script>
export default {
    name: 'search',
    methods:{
        btn_search(){
            if(this.search){
                this.searcheData = this.data.filter(el => {
                  return Object.keys(el).some(key => {
                      return String(el[key]).toLowerCase().indexOf(this.search) > -1 || String(el[key]).toUpperCase().indexOf(this.search) > -1
                   })
                })
            }
            console.log(JSON.stringify(this.searcheData, null, 2))
        },
        search_input(){
            setTimeout(() => {
                if(this.search){
                this.searcheData = this.data.filter(el => {
                  return Object.keys(el).some(key => {
                      return String(el[key]).toLowerCase().indexOf(this.search) > -1 || String(el[key]).toUpperCase().indexOf(this.search) > -1
                   })
                })
            } 
            },2000)
            console.log(JSON.stringify(this.searcheData, null, 2))
        }
    },
        data(){
        return{
            search: '',
            searchData: [],
            data:[
                {name: 'Rain',datatime: '2020-3-12'},
                {name: 'Pubg',datatime: '2020-3-13'},
                {name: 'Cod',datatime: '2020-3-14'},
                {name: 'Bf1',datatime: '2020-3-15'},
                {name: 'Rer',datatime: '2020-3-16'},
                {name: 'Git',datatime: '2020-3-17'}
            ]
        }
    }
}
</script>

<style lang="less">
body{
    background: #ecf0f1;
}
    #search_div div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30px;
    }
    #search_div input{
        flex: 1;
        height: 23px;
        margin-right: 5px;
    }
    #search_div button{
        color: #3498db;
        width: 50px;
        height: 27px;
    }
    #search_div ul{
        display: flex;
        list-style: none;
    }
     #search_div ul li span{
        padding-right: 50px
    }
</style>