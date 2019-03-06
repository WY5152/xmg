import http from "@/utils/http";

export const FreeData = (params) => http("get", "/api/m/?r=nine/listajax&n_id=58&page=1&cac_id=",params)
export const ChData = (params) => http("get","/api/m/?r=nine/listajax&page=1&storey=1&n_id=2&cac_id=",params)
