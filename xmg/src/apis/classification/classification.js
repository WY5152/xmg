import http from "@/utils/http";

export const ClassData = (param) => http("get", "/api/m/index.php?r=class/index&type=1",param)
