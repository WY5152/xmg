import http from "@/utils/http";

export const HomeData = (params)=>http("post","/apim/?r=index/down",params)