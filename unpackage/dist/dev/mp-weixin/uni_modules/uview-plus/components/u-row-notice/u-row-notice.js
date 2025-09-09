"use strict";
const uni_modules_uviewPlus_components_uRowNotice_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewPlus_libs_function_test = require("../../libs/function/test.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-row-notice",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uRowNotice_props.props],
  data() {
    return {
      animationDuration: "0",
      // 动画执行时间
      animationPlayState: "paused",
      // 动画的开始和结束执行
      // nvue下，内容发生变化，导致滚动宽度也变化，需要标志为是否需要重新计算宽度
      // 不能在内容变化时直接重新计算，因为nvue的animation模块上一次的滚动不是刚好结束，会有影响
      nvueInit: true,
      show: true
    };
  },
  watch: {
    text: {
      immediate: true,
      handler(newValue, oldValue) {
        this.vue();
        if (!uni_modules_uviewPlus_libs_function_test.test.string(newValue)) {
          uni_modules_uviewPlus_libs_function_index.error("noticebar组件direction为row时，要求text参数为字符串形式");
        }
      }
    },
    fontSize() {
      this.vue();
    },
    speed() {
      this.vue();
    }
  },
  computed: {
    // 文字内容的样式
    textStyle() {
      let style = {};
      style.whiteSpace = "nowrap !important";
      style.color = this.color;
      style.fontSize = uni_modules_uviewPlus_libs_function_index.addUnit(this.fontSize);
      return style;
    },
    animationStyle() {
      let style = {};
      style.animationDuration = this.animationDuration;
      style.animationPlayState = this.animationPlayState;
      return style;
    },
    // 内部对用户传入的数据进一步分割，放到多个text标签循环，否则如果用户传入的字符串很长（100个字符以上）
    // 放在一个text标签中进行滚动，在低端安卓机上，动画可能会出现抖动现象，需要分割到多个text中可解决此问题
    innerText() {
      let result = [], len = 20;
      const textArr = this.text.split("");
      for (let i = 0; i < textArr.length; i += len) {
        result.push(textArr.slice(i, i + len).join(""));
      }
      return result;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["click", "close"],
  methods: {
    init() {
      this.vue();
      if (!uni_modules_uviewPlus_libs_function_test.test.string(this.text)) {
        uni_modules_uviewPlus_libs_function_index.error("noticebar组件direction为row时，要求text参数为字符串形式");
      }
    },
    // vue版处理
    async vue() {
      let textWidth = 0;
      await uni_modules_uviewPlus_libs_function_index.sleep();
      textWidth = (await this.$uGetRect(".u-notice__content__text")).width;
      (await this.$uGetRect(".u-notice__content")).width;
      this.animationDuration = `${textWidth / uni_modules_uviewPlus_libs_function_index.getPx(this.speed)}s`;
      this.animationPlayState = "paused";
      setTimeout(() => {
        this.animationPlayState = "running";
      }, 10);
    },
    // nvue版处理
    async nvue() {
    },
    loopAnimation(textWidth, boxWidth) {
    },
    getNvueRect(el) {
    },
    // 点击通告栏
    clickHandler(index) {
      this.$emit("click");
    },
    // 点击右侧按钮，需要判断点击的是关闭图标还是箭头图标
    close() {
      this.$emit("close");
    }
  },
  beforeUnmount() {
    this.stopAnimation = true;
  }
};
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? {
    b: common_vendor.p({
      name: _ctx.icon,
      color: _ctx.color,
      size: "19"
    })
  } : {}, {
    c: common_vendor.f($options.innerText, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    d: common_vendor.s($options.textStyle),
    e: common_vendor.s($options.animationStyle),
    f: ["link", "closable"].includes(_ctx.mode)
  }, ["link", "closable"].includes(_ctx.mode) ? common_vendor.e({
    g: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    h: common_vendor.p({
      name: "arrow-right",
      size: 17,
      color: _ctx.color
    })
  } : {}, {
    i: _ctx.mode === "closable"
  }, _ctx.mode === "closable" ? {
    j: common_vendor.o($options.close),
    k: common_vendor.p({
      name: "close",
      size: 16,
      color: _ctx.color
    })
  } : {}) : {}, {
    l: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    m: common_vendor.gei(_ctx, "")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab8dee7b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-row-notice/u-row-notice.js.map
