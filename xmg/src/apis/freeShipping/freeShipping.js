import http from "@/utils/http";

export const FreeData = (params) => http("get", "/api/m/?r=nine/listajax&n_id=58&page=1&cac_id=",params)
   