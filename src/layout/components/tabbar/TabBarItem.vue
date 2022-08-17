<template>
  <div :class="{'tab-bar-item':!isActive,'tab-bar-item-active':isActive}" @click="handleSelect(path,'')">
    <div v-if="isActive">
      <slot name="item-img-active"/>
    </div>
    <div v-else>
      <slot name="item-img"/>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"/>
    </div>

<!--    <img src="../../../assets/img/tabhome.svg"/>
    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#1296db'
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{color:'#3f3e3e'}
    }
  },
  data(){
    return{
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 15px;
    color: #3f3e3e;
  }
  .tab-bar-item-active{
    flex:1;
    text-align: center;
    height: 50px;
    font-size: 16px;
    color: #3f3e3e;
  }

  .tab-bar-item img{
    width: 25px;
    height: 25px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .tab-bar-item-active img{
    width: 26px;
    height: 26px;
    margin-top: 1px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>