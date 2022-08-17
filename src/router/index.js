import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/Home";
import Category from "@/views/category/Category";
import Cart from "@/views/cart/Cart";
import Profile from "@/views/profile/Profile";
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
  const routes = [
    {path:'',component:Home},
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/cart',component:Cart},
    {path:'/profile',component:Profile},

]

const router = new VueRouter({
  routes,
  model:'history'
})
router.beforeEach((to,from,next)=>{
  //document.title = to.matched[0].meta.title
  next()
})
export default router
