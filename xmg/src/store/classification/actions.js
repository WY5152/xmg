import {ClassData} from "../../apis/classification/classification";

export default {
    async handleClassData({commit},param){
       
        let data = await ClassData(param);
        console.log(data);
       commit("handleFreeData",data.date);
    }
}