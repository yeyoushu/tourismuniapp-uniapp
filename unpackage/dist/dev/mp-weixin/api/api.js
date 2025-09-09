"use strict";
const api_http = require("./http.js");
const getBanner = () => {
  return api_http.http(
    "/user/getBanner"
  );
};
const getHomeList = () => {
  return api_http.http(
    "/user/getHomeList"
  );
};
const project = () => {
  return api_http.http(
    "/detail/project"
  );
};
const getUserInfo = () => {
  return api_http.http(
    "/getUserInfo"
  );
};
const getLogin = (code) => {
  return api_http.http(
    "/login",
    {
      code
    },
    "post"
  );
};
const projectInfo = (data) => {
  return api_http.http(
    "/project/info",
    data
  );
};
const likeList = () => {
  return api_http.http(
    "/like/list"
  );
};
exports.getBanner = getBanner;
exports.getHomeList = getHomeList;
exports.getLogin = getLogin;
exports.getUserInfo = getUserInfo;
exports.likeList = likeList;
exports.project = project;
exports.projectInfo = projectInfo;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
