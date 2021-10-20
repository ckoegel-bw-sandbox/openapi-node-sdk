"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BandwidthMessage = _interopRequireDefault(require("./BandwidthMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BandwidthCallbackMessage model module.
 * @module model/BandwidthCallbackMessage
 * @version 1.0.0
 */
var BandwidthCallbackMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BandwidthCallbackMessage</code>.
   * @alias module:model/BandwidthCallbackMessage
   */
  function BandwidthCallbackMessage() {
    _classCallCheck(this, BandwidthCallbackMessage);

    BandwidthCallbackMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BandwidthCallbackMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BandwidthCallbackMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BandwidthCallbackMessage} obj Optional instance to populate.
     * @return {module:model/BandwidthCallbackMessage} The populated <code>BandwidthCallbackMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BandwidthCallbackMessage();

        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('errorCode')) {
          obj['errorCode'] = _ApiClient["default"].convertToType(data['errorCode'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _BandwidthMessage["default"].constructFromObject(data['message']);
        }
      }

      return obj;
    }
  }]);

  return BandwidthCallbackMessage;
}();
/**
 * @member {String} time
 */


BandwidthCallbackMessage.prototype['time'] = undefined;
/**
 * @member {String} type
 */

BandwidthCallbackMessage.prototype['type'] = undefined;
/**
 * @member {String} to
 */

BandwidthCallbackMessage.prototype['to'] = undefined;
/**
 * @member {String} errorCode
 */

BandwidthCallbackMessage.prototype['errorCode'] = undefined;
/**
 * @member {String} description
 */

BandwidthCallbackMessage.prototype['description'] = undefined;
/**
 * @member {module:model/BandwidthMessage} message
 */

BandwidthCallbackMessage.prototype['message'] = undefined;
var _default = BandwidthCallbackMessage;
exports["default"] = _default;