import {FreeData,ChData} from "../../apis/freeShipping/freeShipping";

export default {
    async handleFreeData({commit},params){
       
        let data = await FreeData(params);
        //console.log(data.data);
       commit("handleFreeData",data.data);
    },
    async handleChData({commit},params){
        let data = await ChData(params);
        console.log(data.data);
        commit("handleChData",data.data);
    },
}