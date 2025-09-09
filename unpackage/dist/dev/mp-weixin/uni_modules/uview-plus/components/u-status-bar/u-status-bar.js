"use strict";
const uni_modules_uviewPlus_components_uStatusBar_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-status-bar",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uStatusBar_props.props],
  data() {
    return {
      isH5: false
    };
  },
  created() {
  },
  emits: ["update:height"],
  computed: {
    style() {
      const style = {};
      let sheight = uni_modules_uviewPlus_libs_function_index.getWindowInfo().statusBarHeight;
      this.$emit("update:height", sheight);
      if (sheight == 0) {
        this.isH5 = true;
      } else {
        style.height = uni_modules_uviewPlus_libs_function_index.addUnit(sheight, "px");
      }
      style.backgroundColor = this.bgColor;
      return uni_modules_uviewPlus_libs_function_index.deepMerge(style, uni_modules_uviewPlus_libs_function_index.addStyle(this.customStyle));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.style),
    b: common_vendor.n($data.isH5 && "u-safe-area-inset-top"),
    c: common_vendor.gei(_ctx, "")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb8e0cdd"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-status-bar/u-status-bar.js.map
