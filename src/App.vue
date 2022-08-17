<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item v-bind:path="'/home'">
        <img slot="item-img" src="@/assets/img/home.svg" />
        <img slot="item-img-active" src="@/assets/img/home-active.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item v-bind:path="'/category'">
        <img slot="item-img" src="@/assets/img/category.svg"/>
        <img slot="item-img-active" src="@/assets/img/category-active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item v-bind:path="'/cart'">
        <img slot="item-img" src="@/assets/img/cart.svg"/>
        <img slot="item-img-active" src="@/assets/img/cart-active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item v-bind:path="'/profile'">
        <img slot="item-img" src="@/assets/img/profile.svg"/>
        <img slot="item-img-active" src="@/assets/img/profile-active.svg" />
        <div slot="item-text">个人</div>
      </tab-bar-item>
    </tab-bar>

  </div>
</template>
<script>
import TabBar from "./layout/components/tabbar/TabBar";
import TabBarItem from "./layout/components/tabbar/TabBarItem";
export default {
  components:{
    TabBar,
    TabBarItem
  },
  data() {
    return {
      activeIndex: '/',
      router:true
    };
  },
  methods: {

  }
}
</script>
<style>
@import "./assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
#app{
  flex:1;
}
</style>
