"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uSwiper_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewPlus_libs_function_test = require("../../libs/function/test.js");
const _sfc_main = {
  name: "u-swiper",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uSwiper_props.props],
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    current(val, preVal) {
      if (val === preVal)
        return;
      this.currentIndex = val;
    }
  },
  emits: ["click", "change", "update:current"],
  computed: {
    itemStyle() {
      return (index) => {
        const style = {};
        if (this.nextMargin && this.previousMargin) {
          style.borderRadius = uni_modules_uviewPlus_libs_function_index.addUnit(this.radius);
          if (index !== this.currentIndex)
            style.transform = "scale(0.92)";
        }
        return style;
      };
    }
  },
  methods: {
    addStyle: uni_modules_uviewPlus_libs_function_index.addStyle,
    addUnit: uni_modules_uviewPlus_libs_function_index.addUnit,
    testObject: uni_modules_uviewPlus_libs_function_test.test.object,
    testImage: uni_modules_uviewPlus_libs_function_test.test.image,
    getItemType(item) {
      if (typeof item === "string")
        return uni_modules_uviewPlus_libs_function_test.test.video(this.getSource(item)) ? "video" : "image";
      if (typeof item === "object" && this.keyName) {
        if (!item.type)
          return uni_modules_uviewPlus_libs_function_test.test.video(this.getSource(item)) ? "video" : "image";
        if (item.type === "image")
          return "image";
        if (item.type === "video")
          return "video";
        return "image";
      }
    },
    // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
    getSource(item) {
      if (typeof item === "string")
        return item;
      if (typeof item === "object" && this.keyName)
        return item[this.keyName];
      else
        uni_modules_uviewPlus_libs_function_index.error("请按格式传递列表参数");
      return "";
    },
    // 轮播切换事件
    change(e) {
      const {
        current
      } = e.detail;
      this.pauseVideo(this.currentIndex);
      this.currentIndex = current;
      this.$emit("update:current", this.currentIndex);
      this.$emit("change", e.detail);
    },
    // 切换轮播时，暂停视频播放
    pauseVideo(index) {
      const lastItem = this.getSource(this.list[index]);
      if (uni_modules_uviewPlus_libs_function_test.test.video(lastItem)) {
        const video = common_vendor.index.createVideoContext(`video-${index}`, this);
        video.pause();
      }
    },
    // 当一个轮播item为视频时，获取它的视频海报
    getPoster(item) {
      return typeof item === "object" && item.poster ? item.poster : "";
    },
    // 点击某个item
    clickHandler(index) {
      this.$emit("click", index);
    }
  }
};
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_swiper_indicator2 = common_vendor.resolveComponent("up-swiper-indicator");
  (_easycom_up_loading_icon2 + _easycom_up_swiper_indicator2)();
}
const _easycom_up_loading_icon = () => "../u-loading-icon/u-loading-icon.js";
const _easycom_up_swiper_indicator = () => "../u-swiper-indicator/u-swiper-indicator.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_swiper_indicator)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.loading
  }, _ctx.loading ? {
    b: common_vendor.p({
      mode: "circle"
    })
  } : {
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return common_vendor.e({
        a: $options.getItemType(item) === "image"
      }, $options.getItemType(item) === "image" ? {
        b: $options.getSource(item),
        c: _ctx.imgMode,
        d: common_vendor.o(($event) => $options.clickHandler(index), index),
        e: $options.addUnit(_ctx.height),
        f: $options.addUnit(_ctx.radius)
      } : {}, {
        g: $options.getItemType(item) === "video"
      }, $options.getItemType(item) === "video" ? {
        h: `video-${index}`,
        i: $options.getSource(item),
        j: $options.getPoster(item),
        k: _ctx.showTitle && $options.testObject(item) && item.title ? item.title : "",
        l: $options.addUnit(_ctx.height),
        m: common_vendor.o(($event) => $options.clickHandler(index), index)
      } : {}, {
        n: _ctx.showTitle && $options.testObject(item) && item.title && $options.testImage($options.getSource(item))
      }, _ctx.showTitle && $options.testObject(item) && item.title && $options.testImage($options.getSource(item)) ? {
        o: common_vendor.t(item.title)
      } : {}, {
        p: common_vendor.s($options.itemStyle(index)),
        q: "d-" + i0,
        r: common_vendor.r("d", {
          item,
          index
        }, i0),
        s: index
      });
    }),
    d: $options.addUnit(_ctx.height),
    e: common_vendor.o((...args) => $options.change && $options.change(...args)),
    f: _ctx.circular,
    g: _ctx.interval,
    h: _ctx.duration,
    i: _ctx.autoplay,
    j: _ctx.current,
    k: _ctx.currentItemId,
    l: $options.addUnit(_ctx.previousMargin),
    m: $options.addUnit(_ctx.nextMargin),
    n: _ctx.acceleration,
    o: _ctx.list.length > 0 ? _ctx.displayMultipleItems : 0,
    p: _ctx.easingFunction
  }, {
    q: !_ctx.loading && _ctx.indicator && !_ctx.showTitle
  }, !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? {
    r: common_vendor.p({
      indicatorActiveColor: _ctx.indicatorActiveColor,
      indicatorInactiveColor: _ctx.indicatorInactiveColor,
      length: _ctx.list.length,
      current: $data.currentIndex,
      indicatorMode: _ctx.indicatorMode
    })
  } : {}, {
    s: common_vendor.s($options.addStyle(_ctx.indicatorStyle)),
    t: _ctx.bgColor,
    v: $options.addUnit(_ctx.height),
    w: $options.addUnit(_ctx.radius),
    x: common_vendor.gei(_ctx, "")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4e7d0c90"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-swiper/u-swiper.js.map
