<template>
<div>
    <div v-if='active == "/profile" ? true : false'>
        <div id="div_">
        <div class="top_profile">
            <article>
                <aside class="me">
                    <img src='../../assets/images/profile/me.png' alt="图片加载失败">
                    <div>
                        <span>Cucuber233</span>
                        <span>中国 成都</span>
                    </div>
                </aside>
                <hr />
                <main>
                    <ul v-for='item in data' :key='item.id'>
                        <li>
                            <span>{{item.id}}</span>
                            <br>
                            <span>{{item.num}}</span>
                        </li>
                    </ul>
                </main>
            </article>
        </div>
        <div class="top_div"></div>
        <div class="bottom_div"></div>
    </div>
    <footer>
        <div @click='btn_("订单")'>
            <span>我的订单</span>
            <span>查看订单<img align=absmiddle src='../../assets/images/profile/right.png' alt="图片加载失败"></span>
        </div>
        <div class="new_">
            <ul>
                <li @click='btn_("等待")'>
                    <img align=absmiddle src='../../assets/images/profile/card.png' alt="图片加载失败">
                    <br>
                    <span>等待付款</span>
                </li @click='btn_("等待")'>
                 <li>
                    <img align=absmiddle src='../../assets/images/profile/clock.png' alt="图片加载失败">
                    <br>
                    <span>等待发货</span>
                </li>
                 <li @click='btn_("等待")'>
                    <img align=absmiddle src='../../assets/images/profile/car.png' alt="图片加载失败">
                    <br>
                    <span>等待收货</span>
                </li>
            </ul>
        </div>
        <div @click='btn_("地址")'>
            <span >收货地址</span>
            <span>中国四川成都市<img align=absmiddle src='../../assets/images/profile/right.png' alt="图片加载失败"></span>
        </div>
         <div @click='btn_("密码")'>
            <span>修改密码</span>
            <span>修改密码<img align=absmiddle src='../../assets/images/profile/right.png' alt="图片加载失败"></span>
        </div>
        <div @click='btn_("账户")'>
            <span>绑定账户</span>
            <span>13699616<img align=absmiddle src='../../assets/images/profile/right.png' alt="图片加载失败"></span>
        </div>
        <div @click='btn_("设置")'>
            <span>设置</span>
            <span><img align=absmiddle src='../../assets/images/profile/right.png' alt="图片加载失败"></span>
        </div>
    </footer>
    </div>
     <router-view clone='active' />
</div>
</template>

<script>
import router from '../router/index'
export default {
    name: 'profile',
    data(){
        return{
            //image: '../../assets/images/profile/me.png',
            data:[
                {'id':'我的积分', 'num':2020},
                {'id':'商品收藏', 'num': 365},
                {'id':'店铺收藏', 'num': 15}
            ],
            active : this.$route.path
        }
    },
    methods:{
        btn_(path_){
            this.$router.push({ name: path_, params:{flag: path_, lastpath: this.$route.path} })
            this.active = 'no'
        }
    },
    // beforeRouteLeave (to, from, next) {
    //     console.log(this.$route.path)
    //     next()
    // } 
}
</script>

<style lang="less">
body{
    background: #ecf0f1;
}
#div_{
    position: relative;
}
.top_div{
    width: 100%;
    height: 10em;
    border-radius: 3%;
    background-color: #95a5a6;
}
.top_profile{
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background: #bdc3c7;
}
.top_profile article{
    width: 100%;
    height: 100%;
}
.top_profile ul{
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
}
.top_profile ul li span:nth-child(2){
    margin: .5em;
}
.top_profile .me{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 60%;
}
.top_profile div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 3em;
}
.top_profile div span{
    margin-top: .6em;
}
.top_profile .me img{
    margin-top: 1em;
}
.top_profile main{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.bottom_div{
    width: 100%;
    height: 3em;
    background: #ecf0f1;
}
footer div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3em;
    background-color: #bdc3c7;
    margin-top: .7em;
    border-radius: 2%;
}
footer .new_{
    width: 100%;
    height: 5em;
}
footer span{
    line-height: 3em;
    padding-left: .5em;
    padding-right: .5em;
}
footer span img{
    width: 1.25em;
    height: 1.25em; 
}
footer .new_ ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}
footer .new_ li:nth-child(2){
    margin-left: 3.7em;
}
footer .new_ li:nth-child(3){
     margin-left: 3.7em;
}
footer div ul li img{
    width: 2.5em;
    height: 2.5em; 
}
</style>