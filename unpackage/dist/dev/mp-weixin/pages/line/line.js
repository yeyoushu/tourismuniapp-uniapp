"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_rate2 = common_vendor.resolveComponent("up-rate");
  const _easycom_up_scroll_list2 = common_vendor.resolveComponent("up-scroll-list");
  (_easycom_up_rate2 + _easycom_up_scroll_list2)();
}
const _easycom_up_rate = () => "../../uni_modules/uview-plus/components/u-rate/u-rate.js";
const _easycom_up_scroll_list = () => "../../uni_modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
if (!Math) {
  (_easycom_up_rate + _easycom_up_scroll_list)();
}
const _sfc_main = {
  __name: "line",
  setup(__props) {
    const dataItem = common_vendor.ref({});
    const count = common_vendor.ref(5);
    common_vendor.onLoad((props) => {
      api_api.projectInfo({
        id: props.id
      }).then((data) => {
        common_vendor.index.__f__("log", "at pages/line/line.vue:47", "data", data);
        dataItem.value = data.data;
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: dataItem.value.id
      }, dataItem.value.id ? {
        b: dataItem.value.location[0],
        c: dataItem.value.location[1],
        d: dataItem.value.markers
      } : {}, {
        e: common_vendor.t(dataItem.value.title),
        f: common_vendor.o(($event) => dataItem.value.count = $event),
        g: common_vendor.p({
          count: count.value,
          modelValue: dataItem.value.count
        }),
        h: common_vendor.f(dataItem.value.other, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.name),
            c: item.id
          };
        }),
        i: common_vendor.p({
          indicator: true,
          indicatorColor: "#fff0f0",
          indicatorActiveColor: "#f56c6c"
        }),
        j: common_vendor.gei(_ctx, "")
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f29b02c7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/line/line.js.map
