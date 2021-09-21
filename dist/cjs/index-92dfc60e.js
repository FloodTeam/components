'use strict';

const _commonjsHelpers = require('./_commonjsHelpers-0c557e26.js');

var Debounce$1 = _commonjsHelpers.createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = outerDecorator;
exports.debounce = debounce;
var DEFAULT_DEBOUNCE_DURATION = 500;

exports.DEFAULT_DEBOUNCE_DURATION = DEFAULT_DEBOUNCE_DURATION;
/** Decorates a class method so that it is debounced by the specified duration */

function outerDecorator(duration) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        // Attach this function to the instance (not the class)
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: debounce(descriptor.value, duration)
        });

        return this[key];
      }
    };
  };
}

/** Debounces the specified function and returns a wrapper function */

function debounce(method) {
  var duration = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_DEBOUNCE_DURATION : arguments[1];

  var timeoutId = undefined;

  function debounceWrapper() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    debounceWrapper.clear();

    timeoutId = setTimeout(function () {
      timeoutId = null;
      method.apply(_this, args);
    }, duration);
  }

  debounceWrapper.clear = function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounceWrapper;
}
});

var dist = _commonjsHelpers.createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _DebounceJs2 = _interopRequireDefault(Debounce$1);

exports['default'] = _DebounceJs2['default'];

_defaults(exports, _interopExportWildcard(Debounce$1, _defaults));
});

const Debounce = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(dist);

exports.Debounce = Debounce;
