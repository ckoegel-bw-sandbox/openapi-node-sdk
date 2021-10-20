"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrderStatusResult model module.
 * @module model/OrderStatusResult
 * @version 1.0.0
 */
var OrderStatusResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderStatusResult</code>.
   * @alias module:model/OrderStatusResult
   */
  function OrderStatusResult() {
    _classCallCheck(this, OrderStatusResult);

    OrderStatusResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderStatusResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderStatusResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusResult} obj Optional instance to populate.
     * @return {module:model/OrderStatusResult} The populated <code>OrderStatusResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderStatusResult();

        if (data.hasOwnProperty('Response Code')) {
          obj['Response Code'] = _ApiClient["default"].convertToType(data['Response Code'], 'Number');
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }

        if (data.hasOwnProperty('E.164 Format')) {
          obj['E.164 Format'] = _ApiClient["default"].convertToType(data['E.164 Format'], 'String');
        }

        if (data.hasOwnProperty('Formatted')) {
          obj['Formatted'] = _ApiClient["default"].convertToType(data['Formatted'], 'String');
        }

        if (data.hasOwnProperty('Country')) {
          obj['Country'] = _ApiClient["default"].convertToType(data['Country'], 'String');
        }

        if (data.hasOwnProperty('Line Type')) {
          obj['Line Type'] = _ApiClient["default"].convertToType(data['Line Type'], 'String');
        }

        if (data.hasOwnProperty('Line Provider')) {
          obj['Line Provider'] = _ApiClient["default"].convertToType(data['Line Provider'], 'String');
        }

        if (data.hasOwnProperty('Mobile Country Code')) {
          obj['Mobile Country Code'] = _ApiClient["default"].convertToType(data['Mobile Country Code'], 'String');
        }

        if (data.hasOwnProperty('Mobile Network Code')) {
          obj['Mobile Network Code'] = _ApiClient["default"].convertToType(data['Mobile Network Code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrderStatusResult;
}();
/**
 * Our vendor's response code.
 * @member {Number} Response Code
 */


OrderStatusResult.prototype['Response Code'] = undefined;
/**
 * Message associated with the response code.
 * @member {String} Message
 */

OrderStatusResult.prototype['Message'] = undefined;
/**
 * The telephone number in E.164 format.
 * @member {String} E.164 Format
 */

OrderStatusResult.prototype['E.164 Format'] = undefined;
/**
 * The formatted version of the telephone number.
 * @member {String} Formatted
 */

OrderStatusResult.prototype['Formatted'] = undefined;
/**
 * The country of the telephone number.
 * @member {String} Country
 */

OrderStatusResult.prototype['Country'] = undefined;
/**
 * The line type of the telephone number.
 * @member {String} Line Type
 */

OrderStatusResult.prototype['Line Type'] = undefined;
/**
 * The service provider of the telephone number.
 * @member {String} Line Provider
 */

OrderStatusResult.prototype['Line Provider'] = undefined;
/**
 * The first half of the Home Network Identity (HNI).
 * @member {String} Mobile Country Code
 */

OrderStatusResult.prototype['Mobile Country Code'] = undefined;
/**
 * The second half of the HNI.
 * @member {String} Mobile Network Code
 */

OrderStatusResult.prototype['Mobile Network Code'] = undefined;
var _default = OrderStatusResult;
exports["default"] = _default;