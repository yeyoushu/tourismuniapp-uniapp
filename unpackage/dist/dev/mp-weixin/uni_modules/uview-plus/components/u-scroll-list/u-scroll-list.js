"use strict";
const uni_modules_uviewPlus_components_uScrollList_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("scrollEvent");
};
const _sfc_main = {
  name: "u-scroll-list",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uScrollList_props.props],
  data() {
    return {
      scrollInfo: {
        scrollLeft: 0,
        scrollWidth: 0
      },
      scrollWidth: 0
    };
  },
  computed: {
    // 指示器为线型的样式
    barStyle() {
      const style = {};
      style.width = uni_modules_uviewPlus_libs_function_index.addUnit(this.indicatorBarWidth);
      style.backgroundColor = this.indicatorActiveColor;
      return style;
    },
    lineStyle() {
      const style = {};
      style.width = uni_modules_uviewPlus_libs_function_index.addUnit(this.indicatorWidth);
      style.backgroundColor = this.indicatorColor;
      return style;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["left", "right"],
  methods: {
    addStyle: uni_modules_uviewPlus_libs_function_index.addStyle,
    getPx: uni_modules_uviewPlus_libs_function_index.getPx,
    init() {
      this.getComponentWidth();
    },
    //
    scrollEvent(status) {
      this.$emit(status);
    },
    // 获取组件的宽度
    async getComponentWidth() {
      await uni_modules_uviewPlus_libs_function_index.sleep(30);
      this.$uGetRect(".u-scroll-list").then((size) => {
        this.scrollWidth = size.width;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.scrollWidth,
    b: $options.getPx(_ctx.indicatorBarWidth),
    c: $options.getPx(_ctx.indicatorWidth),
    d: _ctx.indicator
  }, _ctx.indicator ? {
    e: common_vendor.s($options.barStyle),
    f: common_vendor.s($options.lineStyle),
    g: common_vendor.s($options.addStyle(_ctx.indicatorStyle))
  } : {}, {
    h: common_vendor.gei(_ctx, "")
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-75b0f429"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-scroll-list/u-scroll-list.js.map
