'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderWidth = exports.buttonStyle = exports.colorStyle = exports.textStyle = exports.disabled = exports.active = exports.focus = exports.hover = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.boxShadow = exports.borderRadius = exports.borderColor = exports.borders = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flex = exports.flexDirection = exports.flexBasis = exports.flexWrap = exports.justifyContent = exports.alignContent = exports.alignItems = exports.ratio = exports.ratioPadding = exports.size = exports.sizeHeight = exports.sizeWidth = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontWeight = exports.lineHeight = exports.textAlign = exports.fontFamily = exports.color = exports.bgColor = exports.textColor = exports.fontSize = exports.width = exports.space = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _space = require('./space');

Object.defineProperty(exports, 'space', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_space).default;
  }
});

var _util = require('./util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getWidth = function getWidth(n) {
  return !util.num(n) || n > 1 ? util.px(n) : n * 100 + '%';
};
var width = exports.width = (0, _util.responsiveStyle)({
  prop: 'width',
  alias: 'w',
  getter: getWidth
});

var fontSize = exports.fontSize = (0, _util.responsiveStyle)({
  prop: 'fontSize',
  alias: 'f',
  key: 'fontSizes',
  numberToPx: true
});

var textColor = exports.textColor = (0, _util.responsiveStyle)({
  prop: 'color',
  key: 'colors'
});

var bgColor = exports.bgColor = (0, _util.responsiveStyle)({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
});

var color = exports.color = function color(props) {
  return (0, _extends3.default)({}, textColor(props), bgColor(props));
};
color.propTypes = (0, _extends3.default)({}, textColor.propTypes, bgColor.propTypes);

// typography
var fontFamily = exports.fontFamily = (0, _util.style)({
  prop: 'fontFamily',
  alias: 'font',
  key: 'fonts'
});

var textAlign = exports.textAlign = (0, _util.responsiveStyle)({
  prop: 'textAlign',
  // for backwards compatibility - will cause bugs when used with alignItems
  alias: 'align'
});

var lineHeight = exports.lineHeight = (0, _util.style)({
  prop: 'lineHeight',
  key: 'lineHeights'
});

var fontWeight = exports.fontWeight = (0, _util.style)({
  prop: 'fontWeight',
  key: 'fontWeights'
});

var letterSpacing = exports.letterSpacing = (0, _util.style)({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  numberToPx: true
});

// layout
var display = exports.display = (0, _util.responsiveStyle)({
  prop: 'display'
});

var maxWidth = exports.maxWidth = (0, _util.responsiveStyle)({
  prop: 'maxWidth',
  key: 'maxWidths',
  numberToPx: true
});

var minWidth = exports.minWidth = (0, _util.responsiveStyle)({
  prop: 'minWidth',
  key: 'minWidths',
  numberToPx: true
});

var height = exports.height = (0, _util.responsiveStyle)({
  prop: 'height',
  key: 'heights',
  numberToPx: true
});

var maxHeight = exports.maxHeight = (0, _util.responsiveStyle)({
  prop: 'maxHeight',
  key: 'maxHeights',
  numberToPx: true
});

var minHeight = exports.minHeight = (0, _util.responsiveStyle)({
  prop: 'minHeight',
  key: 'minHeights',
  numberToPx: true
});

var sizeWidth = exports.sizeWidth = (0, _util.responsiveStyle)({
  prop: 'size',
  cssProperty: 'width',
  numberToPx: true
});

var sizeHeight = exports.sizeHeight = (0, _util.responsiveStyle)({
  prop: 'size',
  cssProperty: 'height',
  numberToPx: true
});

var size = exports.size = function size(props) {
  return (0, _extends3.default)({}, sizeWidth(props), sizeHeight(props));
};
size.propTypes = (0, _extends3.default)({}, sizeWidth.propTypes, sizeHeight.propTypes);

var ratioPadding = exports.ratioPadding = (0, _util.style)({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  getter: function getter(n) {
    return n * 100 + '%';
  }
});

var ratio = exports.ratio = function ratio(props) {
  return (0, _extends3.default)({
    height: 0
  }, ratioPadding(props));
};
ratio.propTypes = (0, _extends3.default)({}, ratioPadding.propTypes);

// flexbox
var alignItems = exports.alignItems = (0, _util.responsiveStyle)({
  prop: 'alignItems',
  // for backwards compatibility - will cause bugs when used with textAlign
  alias: 'align'
});

var alignContent = exports.alignContent = (0, _util.responsiveStyle)({
  prop: 'alignContent'
});

var justifyContent = exports.justifyContent = (0, _util.responsiveStyle)({
  prop: 'justifyContent',
  // for backwards compatibility
  alias: 'justify'
});

// for backwards compatibility
var flexWrapShim = function flexWrapShim(n) {
  return n === true ? 'wrap' : n;
};
var flexWrap = exports.flexWrap = (0, _util.responsiveStyle)({
  prop: 'flexWrap',
  alias: 'wrap',
  getter: flexWrapShim
});

var flexBasis = exports.flexBasis = (0, _util.responsiveStyle)({
  prop: 'flexBasis',
  getter: getWidth
});

var flexDirection = exports.flexDirection = (0, _util.responsiveStyle)({
  prop: 'flexDirection'
});

var flex = exports.flex = (0, _util.responsiveStyle)({
  prop: 'flex'
});

var justifySelf = exports.justifySelf = (0, _util.responsiveStyle)({
  prop: 'justifySelf'
});

var alignSelf = exports.alignSelf = (0, _util.responsiveStyle)({
  prop: 'alignSelf'
});

var order = exports.order = (0, _util.responsiveStyle)({
  prop: 'order'
});

// grid
var gridGap = exports.gridGap = (0, _util.responsiveStyle)({
  prop: 'gridGap',
  numberToPx: true,
  key: 'space'
});

var gridColumnGap = exports.gridColumnGap = (0, _util.responsiveStyle)({
  prop: 'gridColumnGap',
  numberToPx: true,
  key: 'space'
});

var gridRowGap = exports.gridRowGap = (0, _util.responsiveStyle)({
  prop: 'gridRowGap',
  numberToPx: true,
  key: 'space'
});

var gridColumn = exports.gridColumn = (0, _util.responsiveStyle)({
  prop: 'gridColumn'
});

var gridRow = exports.gridRow = (0, _util.responsiveStyle)({
  prop: 'gridRow'
});

var gridAutoFlow = exports.gridAutoFlow = (0, _util.style)({
  prop: 'gridAutoFlow'
});

var gridAutoColumns = exports.gridAutoColumns = (0, _util.style)({
  prop: 'gridAutoColumns'
});

var gridAutoRows = exports.gridAutoRows = (0, _util.style)({
  prop: 'gridAutoRows'
});

var gridTemplateColumns = exports.gridTemplateColumns = (0, _util.responsiveStyle)({
  prop: 'gridTemplateColumns'
});

var gridTemplateRows = exports.gridTemplateRows = (0, _util.responsiveStyle)({
  prop: 'gridTemplateRows'
});

// borders
var getBorder = function getBorder(n) {
  return util.num(n) && n > 0 ? n + 'px solid' : n;
};

var border = exports.border = (0, _util.responsiveStyle)({
  prop: 'border',
  key: 'borders',
  getter: getBorder
});

var borderTop = exports.borderTop = (0, _util.responsiveStyle)({
  prop: 'borderTop',
  key: 'borders',
  getter: getBorder
});

var borderRight = exports.borderRight = (0, _util.responsiveStyle)({
  prop: 'borderRight',
  key: 'borders',
  getter: getBorder
});

var borderBottom = exports.borderBottom = (0, _util.responsiveStyle)({
  prop: 'borderBottom',
  key: 'borders',
  getter: getBorder
});

var borderLeft = exports.borderLeft = (0, _util.responsiveStyle)({
  prop: 'borderLeft',
  key: 'borders',
  getter: getBorder
});

var borders = exports.borders = function borders(props) {
  return (0, _extends3.default)({}, border(props), borderTop(props), borderRight(props), borderBottom(props), borderLeft(props));
};
borders.propTypes = (0, _extends3.default)({}, border.propTypes, borderTop.propTypes, borderRight.propTypes, borderBottom.propTypes, borderLeft.propTypes);

var borderColor = exports.borderColor = (0, _util.style)({
  prop: 'borderColor',
  key: 'colors'
});

var borderRadius = exports.borderRadius = (0, _util.style)({
  prop: 'borderRadius',
  key: 'radii',
  numberToPx: true
});

var boxShadow = exports.boxShadow = (0, _util.style)({
  prop: 'boxShadow',
  key: 'shadows'
});

// backgrounds
var background = exports.background = (0, _util.style)({
  prop: 'background'
});

var backgroundImage = exports.backgroundImage = (0, _util.style)({
  prop: 'backgroundImage',
  alias: 'bgImage',
  getter: function getter(n) {
    return 'url(' + n + ')';
  }
});

var backgroundSize = exports.backgroundSize = (0, _util.style)({
  prop: 'backgroundSize',
  alias: 'bgSize'
});

var backgroundPosition = exports.backgroundPosition = (0, _util.style)({
  prop: 'backgroundPosition',
  alias: 'bgPosition'
});

var backgroundRepeat = exports.backgroundRepeat = (0, _util.style)({
  prop: 'backgroundRepeat',
  alias: 'bgRepeat'
});

// position
var position = exports.position = (0, _util.responsiveStyle)({
  prop: 'position'
});

var zIndex = exports.zIndex = (0, _util.style)({
  prop: 'zIndex'
});

var top = exports.top = (0, _util.responsiveStyle)({
  prop: 'top',
  numberToPx: true
});

var right = exports.right = (0, _util.responsiveStyle)({
  prop: 'right',
  numberToPx: true
});

var bottom = exports.bottom = (0, _util.responsiveStyle)({
  prop: 'bottom',
  numberToPx: true
});

var left = exports.left = (0, _util.responsiveStyle)({
  prop: 'left',
  numberToPx: true
});

// pseudos
var hover = exports.hover = (0, _util.pseudoStyle)({
  prop: 'hover',
  pseudoclass: 'hover',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
});

var focus = exports.focus = (0, _util.pseudoStyle)({
  prop: 'focus',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
});

var active = exports.active = (0, _util.pseudoStyle)({
  prop: 'active',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
});

var disabled = exports.disabled = (0, _util.pseudoStyle)({
  prop: 'disabledStyle',
  pseudoclass: 'disabled',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
});

var textStyle = exports.textStyle = (0, _util.complexStyle)({
  prop: 'textStyle',
  key: 'textStyles'
});

var colorStyle = exports.colorStyle = (0, _util.complexStyle)({
  prop: 'colors',
  key: 'colorStyles'
});

var buttonStyle = exports.buttonStyle = (0, _util.complexStyle)({
  prop: 'buttonStyle',
  key: 'buttons'
});

// for backwards-compatibility
// these will be removed in v3
var __DEV__ = process.env.NODE_ENV !== 'production';

var borderWidth = exports.borderWidth = (0, _util.style)({
  prop: 'borderWidth',
  cssProperty: 'border',
  key: 'borderWidths',
  getter: function getter(v) {
    if (__DEV__) {
      console.warn('borderWidth is deprecated. Please use the `borders` utility instead');
    }
    return getBorder(v);
  }
});