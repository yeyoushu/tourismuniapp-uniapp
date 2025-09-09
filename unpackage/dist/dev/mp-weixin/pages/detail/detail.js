"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_tag2 = common_vendor.resolveComponent("up-tag");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_navbar2 + _easycom_up_tag2 + _easycom_up_icon2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_tag = () => "../../uni_modules/uview-plus/components/u-tag/u-tag.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_tag + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const item = common_vendor.reactive({
      dt: ""
    });
    const projectList = common_vendor.ref([]);
    common_vendor.onLoad((can) => {
      item.dt = JSON.parse(decodeURIComponent(can.item));
      api_api.project().then((res) => {
        projectList.value = res.data;
        common_vendor.index.__f__("log", "at pages/detail/detail.vue:66", "item", res.data);
      });
    });
    const goLine = (item2) => {
      common_vendor.index.navigateTo({
        url: `/pages/line/line?id=${item2.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "",
          ["bg-color"]: "#ebebeb",
          height: "0",
          ["left-icon-color"]: "#fff",
          autoBack: true
        }),
        b: item.dt.img,
        c: common_vendor.t(item.dt.title),
        d: common_vendor.p({
          text: "5A级景区",
          size: "mini",
          shape: "circle"
        }),
        e: common_vendor.t(item.dt.introduce),
        f: common_vendor.t(item.dt.times),
        g: common_vendor.f(projectList.value, (item2, index, i0) => {
          return {
            a: item2.url,
            b: common_vendor.t(item2.tag),
            c: common_vendor.t(item2.title),
            d: "eca06f3c-2-" + i0,
            e: common_vendor.t(item2.desc),
            f: index,
            g: common_vendor.o(($event) => goLine(item2), index)
          };
        }),
        h: common_vendor.p({
          name: "map",
          color: "#9c9c9c",
          size: "16"
        }),
        i: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eca06f3c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
