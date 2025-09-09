"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const _sfc_main = {
  __name: "link",
  setup(__props) {
    const linkList = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      api_api.likeList().then((res) => {
        linkList.value = res.data;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(linkList.value, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.tiele),
            c: common_vendor.t(item.introduce),
            d: index
          };
        }),
        b: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b7b55706"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/link/link.js.map
