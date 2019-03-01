import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import ErrorCom from "@/components/error/error"
import Classification from "@/components/classification/classification"
import Collection from "@/components/collection/collection"
import FreeShipping from "@/components/freeShipping/freeShipping"
import My from "@/components/my/my"
import Ch from "@/components/freeShipping/components/ch"

Vue.use(Router)


var vm = new Router({
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
      path:"/collection",
      component:Collection,
      name:"collection",
    },
    {
      path:"/freeShipping",
      component:FreeShipping,
      name:"freeShipping"
    },
    {
      path:"/ch",
      component:Ch,
      name:"ch",
      meta:{
        flag:false,
      }
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



export default vm