import Vue from "vue";
import Vuex from "vuex";
import classification from "./classification";
import freeShipping from "./free-shipping";
import home from "./home";
import collection from "./collection";
import my from "./my";
Vue.use(Vuex);



let state ={};
let actions ={};
let mutations ={};
let getters = {};

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
        home,
        classification,
        freeShipping,
        collection,
        my
    }
})

export default store;