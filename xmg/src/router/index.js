import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import ErrorCom from "@/components/error/error"
import Classification from "@/components/classification/classification"
import Collection from "@/components/collection/collection"
import FreeShipping from "@/components/free-shipping/free-shipping"
import My from "@/components/my/my"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home,
      name:"home",
    },
    {
      path:"/classification",
      component:Classification,
      name:"classification",
    },
    {
      path:"/Collection",
      component:Collection,
      name:"collection",
    },
    {
      path:"/free-shipping",
      component:FreeShipping,
      name:"free-shipping",
    },
    {
      path:"/my",
      component:My,
      name:"my",
    },
    {
      path:"**",
      component:ErrorCom,
    }
  ]
})
