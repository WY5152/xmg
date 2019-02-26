<template>
    <div>
        home
    </div>
</template>

<script>
import Vuex from "vuex";

export default {
   created(){
       this.handleHomeData();
   },
    methods:{
        ...Vuex.mapActions({
            handleHomeData:"home/handleHomeData"
        })
    }
}
</script>


<style lang="">
    
</style>