"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
require("../../uni_modules/uview-plus/index.js");
const uni_modules_uviewPlus_libs_function_index = require("../../uni_modules/uview-plus/libs/function/index.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_notice_bar2 = common_vendor.resolveComponent("up-notice-bar");
  const _easycom_up_lazy_load2 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_waterfall2 = common_vendor.resolveComponent("up-waterfall");
  (_easycom_up_search2 + _easycom_up_swiper2 + _easycom_up_notice_bar2 + _easycom_up_lazy_load2 + _easycom_up_icon2 + _easycom_up_waterfall2)();
}
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_up_notice_bar = () => "../../uni_modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
const _easycom_up_lazy_load = () => "../../uni_modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_waterfall = () => "../../uni_modules/uview-plus/components/u-waterfall/u-waterfall.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_swiper + _easycom_up_notice_bar + _easycom_up_lazy_load + _easycom_up_icon + _easycom_up_waterfall)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    let bannerList = common_vendor.ref([]);
    const uWaterfallRef = common_vendor.ref(null);
    common_vendor.ref("loadmore");
    const bannertext = common_vendor.ref("项目数据仅为测试数据，非真实数据。");
    const flowList = common_vendor.ref([]);
    const list = common_vendor.ref([]);
    const showTopBtn = common_vendor.ref(0);
    const githome = () => {
      api_api.getHomeList().then((res) => {
        list.value = res.data;
        addRandomData();
      });
    };
    const addRandomData = () => {
      for (let i = 0; i < 9; i++) {
        let index = common_vendor.index.$u.random(0, list.value.length - 1);
        let item = JSON.parse(JSON.stringify(list.value[index]));
        item.id = uni_modules_uviewPlus_libs_function_index.guid();
        flowList.value.push(item);
      }
    };
    const goDetail = (item) => {
      const can = JSON.stringify(item);
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?item=${encodeURIComponent(can)}`
      });
    };
    common_vendor.onLoad(() => {
      api_api.getBanner().then((res) => {
        bannerList.value = res.data.bannerList;
      });
    });
    common_vendor.onMounted(() => {
      githome();
    });
    const remove = (id) => {
      uWaterfallRef.value.remove(id);
    };
    common_vendor.onReachBottom(() => {
      setTimeout(() => {
        addRandomData();
      }, 1e3);
    });
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 600) {
        showTopBtn.value = 1;
      } else {
        showTopBtn.value = 0;
      }
    });
    const toTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 100,
        duration: 300
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => keyword.value = $event),
        b: common_vendor.p({
          placeholder: "搜索景点",
          shape: "round",
          clearabled: true,
          ["bg-color"]: "#e3e3e3",
          modelValue: keyword.value
        }),
        c: common_vendor.unref(bannerList).length
      }, common_vendor.unref(bannerList).length ? {
        d: common_vendor.p({
          keyName: "image",
          showTitle: true,
          list: common_vendor.unref(bannerList),
          radius: "8",
          autoplay: true,
          height: "160"
        })
      } : {}, {
        e: common_vendor.p({
          text: bannertext.value,
          ["bg-color"]: "#ffffff",
          mode: "closable"
        }),
        f: common_vendor.w(({
          colList,
          colIndex
        }, s0, i0) => {
          return {
            a: common_vendor.f(colList, (item, index, i1) => {
              return common_vendor.e({
                a: "1cf27b2a-4-" + i0 + "-" + i1 + ",1cf27b2a-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.t(item.tag[0]),
                f: common_vendor.t(item.tag[1]),
                g: item.isDot
              }, item.isDot ? {
                h: common_vendor.t(item.isDot)
              } : {}, {
                i: common_vendor.o(($event) => remove(item.id), index),
                j: "1cf27b2a-5-" + i0 + "-" + i1 + ",1cf27b2a-3",
                k: index,
                l: common_vendor.o(($event) => goDetail(item), index)
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "column",
          path: "f",
          vueId: "1cf27b2a-3"
        }),
        g: common_vendor.p({
          name: "close-circle-fill",
          color: "#f1dfd8",
          size: "14"
        }),
        h: common_vendor.sr(uWaterfallRef, "1cf27b2a-3", {
          "k": "uWaterfallRef"
        }),
        i: common_vendor.o(($event) => flowList.value = $event),
        j: common_vendor.p({
          columns: "2",
          modelValue: flowList.value
        }),
        k: showTopBtn.value == 1
      }, showTopBtn.value == 1 ? {
        l: common_vendor.p({
          name: "arrow-upward",
          color: "#ffffff",
          size: "28"
        }),
        m: common_vendor.o(toTop)
      } : {}, {
        n: common_vendor.gei(_ctx, "")
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
