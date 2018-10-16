# 定制主题

> vcu 默认提供了一套 UI 主题，并且可以在一定程度上定制新主题，以满足业务和品牌上的多样化视觉需求。

> vcu 的样式是基于 Less 进行开发的，默认以前缀 .vcu- 作为命名空间，并且定义了一套样式变量，定制主题，就是编辑这个变量列表。

## 变量覆盖（推荐）

如果你的项目使用了 webpack 工程，可以通过变量覆盖的方式来实现主题定制。

首先在项目中先建一个目录，比如 my-theme，然后在 my-theme 下建立一个 less 文件 index.less，并写入下面内容：

```less
@import '~vcu/src/_style/index.less';

// Here are the variables to cover, such as:
@primary-color: #8c0776;
```

然后在入口文件 main.js 内导入这个 less 文件即可：

```jsx
import Vue from 'vue';
import vcu from 'vcu';
import '../my-theme/index.less';

Vue.use(vcu);
```




### 默认样式变量

```less

// -------- Colors -----------
@primary-color          : @blue-6;
@info-color             : @blue-4;
@success-color          : @green-6;
@processing-color       : @primary-color;
@error-color            : @red-6;
@highlight-color        : @red-6;
@warning-color          : @gold-6;
@normal-color           : #d9d9d9;

// Color used by default to control hover and active backgrounds and for
// alert info backgrounds.
@primary-1: color(~`colorPalette("@{primary-color}", 1)`);  // replace tint(@primary-color, 90%)
@primary-2: color(~`colorPalette("@{primary-color}", 2)`);  // replace tint(@primary-color, 80%)
@primary-3: color(~`colorPalette("@{primary-color}", 3)`);  // unused
@primary-4: color(~`colorPalette("@{primary-color}", 4)`);  // unused
@primary-5: color(~`colorPalette("@{primary-color}", 5)`);  // color used to control the text color in many active and hover states, replace tint(@primary-color, 20%)
@primary-6: @primary-color;                                 // color used to control the text color of active buttons, don't use, use @primary-color
@primary-7: color(~`colorPalette("@{primary-color}", 7)`);  // replace shade(@primary-color, 5%)
@primary-8: color(~`colorPalette("@{primary-color}", 8)`);  // unused
@primary-9: color(~`colorPalette("@{primary-color}", 9)`);  // unused
@primary-10: color(~`colorPalette("@{primary-color}", 10)`);  // unused

// Base Scaffolding Variables
// ---

// Background color for `<body>`
@body-background        : #fff;
// Base background color for most components
@component-background   : #fff;
@font-family            : "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
@font-family-no-number  : @font-family;
@code-family            : Consolas,Menlo,Courier,monospace;
@heading-color          : fade(#000, 85%);
@text-color             : fade(#000, 65%);
@text-color-secondary   : fade(#000, 45%);
@heading-color-dark     : fade(#fff, 100%);
@text-color-dark        : fade(#fff,85%);
@text-color-secondary-dark: fade(#fff, 65%);
@font-size-base         : 12px;
@font-size-middle       : @font-size-base + 2px;
@font-size-lg           : @font-size-middle + 2px;
@line-height-base       : 1.5;
@border-radius-base     : 4px;
@border-radius-sm       : 2px;

// vertical paddings
@padding-lg    : 24px; // containers
@padding-md    : 16px; // small containers and buttons
@padding-sm    : 12px; // Form controls and items
@padding-xs    : 8px;  // small items

// vertical padding for all form controls
@control-padding-horizontal: @padding-sm;
@control-padding-horizontal-sm: @padding-xs;

// The background colors for active and hover states for things like
// list items or table cells.
@item-active-bg         : @primary-1;
@item-hover-bg          : @primary-1;

// ICONFONT
@iconfont-css-prefix    : vcuicon;

// LINK
@link-color             : @primary-color;
@link-hover-color       : color(~`colorPalette("@{link-color}", 5)`);
@link-active-color      : color(~`colorPalette("@{link-color}", 7)`);
@link-decoration        : none;
@link-hover-decoration  : none;

// Animation
@ease-base-out       : cubic-bezier(0.7, 0.3, 0.1, 1);
@ease-base-in        : cubic-bezier(0.9, 0, 0.3, 0.7);
@ease-out            : cubic-bezier(0.215, 0.61, 0.355, 1);
@ease-in             : cubic-bezier(0.55, 0.055, 0.675, 0.19);
@ease-in-out         : cubic-bezier(0.645, 0.045, 0.355, 1);
@ease-out-back       : cubic-bezier(0.12, 0.4, 0.29, 1.46);
@ease-in-back        : cubic-bezier(0.71, -0.46, 0.88, 0.6);
@ease-in-out-back    : cubic-bezier(0.71, -0.46, 0.29, 1.46);
@ease-out-circ       : cubic-bezier(0.08, 0.82, 0.17, 1);
@ease-in-circ        : cubic-bezier(0.6, 0.04, 0.98, 0.34);
@ease-in-out-circ    : cubic-bezier(0.78, 0.14, 0.15, 0.86);
@ease-out-quint      : cubic-bezier(0.23, 1, 0.32, 1);
@ease-in-quint       : cubic-bezier(0.755, 0.05, 0.855, 0.06);
@ease-in-out-quint   : cubic-bezier(0.86, 0, 0.07, 1);

// Border color
@border-color-base      : hsv(0, 0, 85%);  // base border outline a component
@border-color-split     : hsv(0, 0, 91%);  // split border inside a component
@border-width-base      : 1px;            // width of the border for a component
@border-style-base      : solid;          // style of a components border

// Outline
@outline-blur-size      : 0;
@outline-width          : 2px;
@outline-color          : @primary-color;

@background-color-light : hsv(0, 0, 98%);  // background of header and selected item
@background-color-base  : hsv(0, 0, 96%);  // Default grey background color

// Disabled states
@disabled-color         : fade(#000, 25%);
@disabled-bg            : @background-color-base;
@disabled-color-dark    : fade(#fff, 35%);

// Shadow
@shadow-color           : rgba(0, 0, 0, .15);
@box-shadow-base        : @shadow-1-down;
@shadow-1-up            : 0 2px 8px @shadow-color;
@shadow-1-down          : 0 2px 8px @shadow-color;
@shadow-1-left          : -2px 0 8px @shadow-color;
@shadow-1-right         : 2px 0 8px @shadow-color;
@shadow-2               : 0 4px 12px @shadow-color;

// Buttons
@btn-font-weight        : 400;
@btn-border-radius-base : @border-radius-base;
@btn-border-radius-sm   : @border-radius-base;

@btn-primary-color      : #fff;
@btn-style-color		: #fff;
@btn-primary-bg         : @primary-color;

@btn-default-color      : @text-color;
@btn-default-bg         : #fff;
@btn-default-border     : @border-color-base;

@btn-danger-color       : @error-color;
@btn-danger-bg          : @background-color-base;
@btn-danger-border      : @border-color-base;

@btn-disable-color      : @disabled-color;
@btn-disable-bg         : @disabled-bg;
@btn-disable-border     : @border-color-base;

@btn-padding-base       : 0 @padding-md - 1px;
@btn-font-size-lg       : @font-size-middle;
@btn-font-size-sm       : @font-size-base;
@btn-padding-lg         : @btn-padding-base;
@btn-padding-sm         : 0 @padding-xs - 1px;

@btn-height-base        : 32px;
@btn-height-lg          : 40px;
@btn-height-sm          : 24px;

@btn-circle-size        : @btn-height-base;
@btn-circle-size-lg     : @btn-height-lg;
@btn-circle-size-sm     : @btn-height-sm;

@btn-group-border       : @primary-5;

// Checkbox
@checkbox-size          : 16px;
@checkbox-color         : @primary-color;
@checkbox-check-color   : #fff;

// Radio
@radio-size             : 16px;
@radio-dot-color        : @primary-color;

// Radio buttons
@radio-button-bg           : @btn-default-bg;
@radio-button-color        : @btn-default-color;
@radio-button-hover-color  : @primary-5;
@radio-button-active-color : @primary-7;

// Media queries breakpoints
// Extra small screen / phone
@screen-xs              : 480px;
@screen-xs-min          : @screen-xs;

// Small screen / tablet
@screen-sm              : 576px;
@screen-sm-min          : @screen-sm;

// Medium screen / desktop
@screen-md              : 768px;
@screen-md-min          : @screen-md;

// Large screen / wide desktop
@screen-lg              : 992px;
@screen-lg-min          : @screen-lg;

// Extra large screen / full hd
@screen-xl              : 1200px;
@screen-xl-min          : @screen-xl;

// Extra extra large screen / large descktop
@screen-xxl              : 1600px;
@screen-xxl-min          : @screen-xxl;

// provide a maximum
@screen-xs-max          : (@screen-sm-min - 1px);
@screen-sm-max          : (@screen-md-min - 1px);
@screen-md-max          : (@screen-lg-min - 1px);
@screen-lg-max          : (@screen-xl-min - 1px);
@screen-xl-max          : (@screen-xxl-min - 1px);

// Grid system
@grid-columns           : 24;
@grid-gutter-width      : 0;

// Layout
@layout-body-background      : #f0f2f5;
@layout-header-background    : #001529;
@layout-footer-background    : @layout-body-background;
@layout-header-height        : 64px;
@layout-header-padding       : 0 50px;
@layout-footer-padding       : 24px 50px;
@layout-sider-background     : @layout-header-background;
@layout-trigger-height       : 48px;
@layout-trigger-background   : #002140;
@layout-trigger-color        : #fff;
@layout-zero-trigger-width   : 36px;
@layout-zero-trigger-height  : 42px;
// Layout light theme
@layout-sider-background-light  : #fff;
@layout-trigger-background-light: #fff;
@layout-trigger-color-light     : @text-color;

// z-index list
@zindex-affix           : 10;
@zindex-back-top        : 10;
@zindex-modal-mask      : 1000;
@zindex-modal           : 1000;
@zindex-notification    : 1010;
@zindex-message         : 1010;
@zindex-popover         : 1030;
@zindex-picker          : 1050;
@zindex-dropdown        : 1050;
@zindex-tooltip         : 1060;

// Animation
@animation-duration-slow: .3s; // Modal
@animation-duration-base: .2s;
@animation-duration-fast: .1s; // Tooltip

// Form
// ---
@label-required-color        : @highlight-color;
@label-color                 : @heading-color;
@form-item-margin-bottom     : 24px;
@form-item-trailing-colon    : true;
@form-vertical-label-padding : 0 0 8px;
@form-vertical-label-margin  : 0;

// Input
// ---
@input-height-base           : 32px;
@input-height-lg             : 40px;
@input-height-sm             : 24px;
@input-padding-horizontal    : @control-padding-horizontal - 1px;
@input-padding-horizontal-base: @input-padding-horizontal;
@input-padding-horizontal-sm : @control-padding-horizontal-sm - 1px;
@input-padding-horizontal-lg : @input-padding-horizontal;
@input-padding-vertical-base : 4px;
@input-padding-vertical-sm   : 1px;
@input-padding-vertical-lg   : 6px;
@input-placeholder-color     : hsv(0, 0, 75%);
@input-color                 : @text-color;
@input-border-color          : @border-color-base;
@input-bg                    : #fff;
@input-addon-bg              : @background-color-light;
@input-hover-border-color    : @primary-color;
@input-disabled-bg           : @disabled-bg;
@input-outline-offset        : 0 0;

// Tooltip
// ---
//* Tooltip max width
@tooltip-max-width: 250px;
//** Tooltip text color
@tooltip-color: #fff;
//** Tooltip background color
@tooltip-bg: rgba(0, 0, 0, .75);
//** Tooltip arrow width
@tooltip-arrow-width: 5px;
//** Tooltip distance with trigger
@tooltip-distance: @tooltip-arrow-width - 1px + 4px;
//** Tooltip arrow color
@tooltip-arrow-color: @tooltip-bg;

// Popover
// ---
//** Popover body background color
@popover-bg: #fff;
//** Popover text color
@popover-color: @text-color;
//** Popover maximum width
@popover-min-width: 177px;
//** Popover arrow width
@popover-arrow-width: 5px;
//** Popover arrow color
@popover-arrow-color: @popover-bg;
//** Popover outer arrow width
//** Popover outer arrow color
@popover-arrow-outer-color: @popover-bg;
//** Popover distance with trigger
@popover-distance: @popover-arrow-width + 4px;

// Modal
// --
@modal-mask-bg: rgba(0, 0, 0, 0.65);

// Progress
// --
@progress-default-color: @processing-color;
@progress-remaining-color: @background-color-base;

// Menu
// ---
@menu-inline-toplevel-item-height: 40px;
@menu-item-height: 40px;
@menu-collapsed-width: 80px;
@menu-bg: @component-background;
@menu-item-color: @text-color;
@menu-highlight-color: @primary-color;
@menu-item-active-bg: @item-active-bg;
@menu-item-group-title-color: @text-color-secondary;
// dark theme
@menu-dark-color: @text-color-secondary-dark;
@menu-dark-bg: @layout-header-background;
@menu-dark-arrow-color: #fff;
@menu-dark-submenu-bg: #000c17;
@menu-dark-highlight-color: #fff;
@menu-dark-item-active-bg: @primary-color;
@menu-dark-item-selected-bg: @primary-color;

// Spin
// ---
@spin-dot-size-sm: 14px;
@spin-dot-size: 20px;
@spin-dot-size-lg: 32px;

// Table
// --
@table-header-bg: @background-color-light;
@table-header-sort-bg: @background-color-base;
@table-row-hover-bg: @primary-1;
@table-selected-row-bg: #fafafa;
@table-expanded-row-bg: #fbfbfb;
@table-padding-vertical: 12px;
@table-padding-horizontal: 12px;

// Tag
// --
@tag-default-bg: @background-color-light;
@tag-default-color: @text-color;
@tag-font-size: @font-size-base;

// TimePicker
// ---
@time-picker-panel-column-width: 56px;
@time-picker-panel-width: @time-picker-panel-column-width * 3;
@time-picker-selected-bg: @background-color-base;

// Carousel
// ---
@carousel-dot-width: 16px;
@carousel-dot-height: 3px;
@carousel-dot-active-width: 24px;

// Badge
// ---
@badge-height: 20px;
@badge-dot-size: 8px;
@badge-font-size: @font-size-base;
@badge-font-weight: normal;
@badge-status-size: 8px;

// Rate
// ---
@rate-star-color: @yellow-6;
@rate-star-bg: @border-color-split;

// Card
// ---
@card-head-color: @heading-color;
@card-head-background: @component-background;
@card-head-padding: 16px;
@card-inner-head-padding: 12px;
@card-padding-base: 24px;
@card-padding-wider: 32px;
@card-actions-background: @background-color-light;
@card-shadow: 0 2px 8px rgba(0, 0, 0, .09);

// Tabs
// ---
@tabs-card-head-background: @background-color-light;
@tabs-card-height: 40px;
@tabs-card-active-color: @primary-color;
@tabs-title-font-size: @font-size-base;
@tabs-title-font-size-lg: @font-size-lg;
@tabs-title-font-size-sm: @font-size-base;
@tabs-ink-bar-color: @primary-color;
@tabs-bar-margin: 0 0 16px 0;
@tabs-horizontal-margin: 0 32px 0 0;
@tabs-horizontal-padding: 12px 16px;
@tabs-vertical-padding: 8px 24px;
@tabs-vertical-margin: 0 0 16px 0;
@tabs-scrolling-size: 32px;
@tabs-highlight-color: @primary-color;
@tabs-hover-color: @primary-5;
@tabs-active-color: @primary-7;

@tabs-ink-bar-bg-color: @primary-color;
@tab-bar-margin: 0 0 16px 0;
@tab-horizontal-margin: 0 32px 0 0;
@tab-vertical-margin: 0 0 16px 0;
@tab-horizontal-padding: 12px 16px;
@tab-vertical-padding: 8px 24px;
@tab-scrolling-size: 32px;
@tab-highlight-color: @primary-color;
@tab-hover-color: @primary-5;
@tab-active-color: @primary-7;

// BackTop
// ---
@back-top-color: #fff;
@back-top-bg: @text-color-secondary;
@back-top-hover-bg: @text-color;

// Avatar
// ---
@avatar-size-base: 32px;
@avatar-size-lg: 40px;
@avatar-size-sm: 24px;
@avatar-font-size-base: 18px;
@avatar-font-size-lg: 24px;
@avatar-font-size-sm: 14px;
@avatar-bg: #ccc;
@avatar-color: #fff;
@avatar-border-radius: @border-radius-base;

// Switch
// ---
@switch-height: 22px;
@switch-sm-height: 16px;
@switch-sm-checked-margin-left: -(@switch-sm-height - 3px);
@switch-disabled-opacity: 0.4;
@switch-color: @primary-color;

// Pagination
// ---
@pagination-item-size: 32px;
@pagination-item-size-sm: 24px;
@pagination-font-family: Arial;
@pagination-font-weight-active: 500;

// Breadcrumb
// ---
@breadcrumb-base-color:        @text-color-secondary;
@breadcrumb-last-item-color:   @text-color;
@breadcrumb-font-size:         @font-size-base;
@breadcrumb-icon-font-size:    @font-size-base;
@breadcrumb-link-color:        @text-color-secondary;
@breadcrumb-link-color-hover:  @primary-5;
@breadcrumb-separator-color:   @text-color-secondary;
@breadcrumb-separator-margin:  0 @padding-xs;

// Slider
// ---
@slider-margin:                       14px 6px 10px;
@slider-rail-background-color:        @background-color-base;
@slider-rail-background-color-hover:  #e1e1e1;
@slider-track-background-color:       @primary-3;
@slider-track-background-color-hover: @primary-4;
@slider-handle-color:                 @primary-3;
@slider-handle-color-hover:           @primary-4;
@slider-handle-color-focus:           tint(@primary-color, 20%);
@slider-handle-color-focus-shadow:    tint(@primary-color, 50%);
@slider-handle-color-tooltip-open:    @primary-color;
@slider-dot-border-color:             @border-color-split;
@slider-dot-border-color-active:      tint(@primary-color, 50%);
@slider-disabled-color:               @disabled-color;
@slider-disabled-background-color:    @component-background;

// Tree
// ---
@tree-title-height:                   24px;
@tree-child-padding:                  18px;
@tree-directory-selected-color:       #fff;
@tree-directory-selected-bg:          @primary-color;

// Collapse
// ---
@collapse-header-padding:             8px 0 8px 40px;
@collapse-header-bg:                  @background-color-light;
@collapse-content-padding:            @padding-md;
@collapse-content-bg:                 @component-background;

// Message
// ---
@message-notice-content-padding:      10px 16px;

// Motion
// ---
@wave-animation-width: 6px;

```