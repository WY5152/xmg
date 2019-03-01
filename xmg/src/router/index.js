import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import ErrorCom from "@/components/error/error"
import Classification from "@/components/classification/classification"
import Collection from "@/components/collection/collection"
import FreeShipping from "@/components/free-shipping/free-shipping"
import My from "@/components/my/my"
import Search from "@/components/home/components/search"
import Footprint from "@/components/home/components/footprint"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      name: "home"
    },
    {
      path: "/search",
      component: Search,
      name: "search",
    },
    {
      path: "/footprint",
      component: Footprint,
      name: "footprint",
    },

    {
      path: "/classification",
      component: Classification,
      name: "classification",
    },
    {
      path: "/Collection",
      component: Collection,
      name: "collection",
    },
    {
      path: "/free-shipping",
      component: FreeShipping,
      name: "free-shipping",
    },
    {
      path: "/my",
      component: My,
      name: "my",
    },
    {
      path: "**",
      component: ErrorCom,
    }
  ]
})
