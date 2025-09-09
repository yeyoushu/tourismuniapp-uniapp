"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 绑定的值
    modelValue: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.value
    },
    // 搜索框形状，round-圆形，square-方形
    shape: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.shape
    },
    // 搜索框背景色
    bgColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.bgColor
    },
    // 占位提示文字
    placeholder: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.placeholder
    },
    // 是否启用清除控件
    clearabled: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.clearabled
    },
    // 是否仅聚焦时显示清除控件
    onlyClearableOnFocused: {
      type: Boolean,
      default: true
    },
    // 是否自动聚焦
    focus: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.focus
    },
    // 是否在搜索框右侧显示取消按钮
    showAction: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.showAction
    },
    // 右侧取消按钮文字
    actionText: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.actionText
    },
    // 搜索框左侧文本
    label: {
      type: [String, Number, null],
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.label
    },
    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.inputAlign
    },
    // 是否启用输入框
    disabled: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.disabled
    },
    // 开启showAction时，是否在input获取焦点时才显示
    animation: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.animation
    },
    // 边框颜色，只要配置了颜色，才会有边框
    borderColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.borderColor
    },
    // 搜索图标的颜色，默认同输入框字体颜色
    searchIconColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.searchIconColor
    },
    // 搜索图标的大小
    searchIconSize: {
      type: [Number, String],
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.searchIconSize
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.color
    },
    // placeholder的颜色
    placeholderColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.placeholderColor
    },
    // 左边输入框的图标，可以为uView图标名称或图片路径
    searchIcon: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.searchIcon
    },
    // 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30px"
    margin: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.margin
    },
    // 应该是uView-plus版本新增的，用于控制搜索图标的插槽位置
    iconPosition: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.iconPosition
    },
    // 输入框最大能输入的长度，-1为不限制长度
    maxlength: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.maxlength
    },
    // 输入框高度，单位px
    height: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.height
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.adjustPosition
    },
    // 键盘收起时，是否自动失去焦点
    autoBlur: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.autoBlur
    },
    // 输入框的样式，对象形式
    inputStyle: {
      type: Object,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.inputStyle
    },
    // 右侧控件的样式，对象形式
    actionStyle: {
      type: Object,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.actionStyle
    },
    // 自定义样式，对象形式
    customStyle: {
      type: Object,
      default: () => uni_modules_uviewPlus_libs_config_props.props.search.customStyle
    }
  }
});
exports.props = props;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-search/props.js.map
