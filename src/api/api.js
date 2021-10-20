import * as http from "./http";

//添加评论
export const postComments = (data) => http.postForJson("/comments", data);
