"use strict";
const common_vendor = require("../common/vendor.js");
let baseURL = "https://m1.apifoxmock.com/m1/4728220-0-default/api";
function http(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseURL + url,
      data,
      method,
      header: {
        "token": common_vendor.index.getStorageSync("token") || ""
      },
      success: (res) => {
        if (res.statusCode === 200) {
          if (res.data.code == 1) {
            resolve(res.data);
          } else if (res.data.code == 0) {
            common_vendor.index.showToast({
              title: res.data.msg,
              icon: "none"
            });
            reject(res.data.msg);
          }
        } else {
          reject(res.data.msg);
        }
      },
      fail: (err) => {
        common_vendor.index.showToast({
          title: "服务器请求异常，请联系管理员",
          icon: "none"
        });
      }
    });
  });
}
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/http.js.map
