import {FreeData} from "../../apis/freeShipping/freeShipping";

export default {
    async handleFreeData({commit},params){
       
        let data = await FreeData(params);
        console.log(data.data);
       commit("handleFreeData",data.data);
    }
}