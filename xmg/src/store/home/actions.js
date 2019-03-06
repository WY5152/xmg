import {HomeData} from "@/apis/home/home";

export default {
    async handleHomeData(){
        let data = await HomeData({token:"d67ce1d96ea60d3127f30aa60aaedd9e" });
        //console.log(data);
    }
}