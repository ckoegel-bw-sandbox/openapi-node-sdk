"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderStatusResult = _interopRequireDefault(require("./OrderStatusResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrderStatus model module.
 * @module model/OrderStatus
 * @version 1.0.0
 */
var OrderStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderStatus</code>.
   * If requestId exists, the result for that request is returned. See the Examples for details on the various responses that you can receive.  Generally, if you see a Response Code of 0 in a result for a TN, information will be available for it.  Any other Response Code will indicate no information was available for the TN.
   * @alias module:model/OrderStatus
   */
  function OrderStatus() {
    _classCallCheck(this, OrderStatus);

    OrderStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatus} obj Optional instance to populate.
     * @return {module:model/OrderStatus} The populated <code>OrderStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderStatus();

        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('failedTelephoneNumbers')) {
          obj['failedTelephoneNumbers'] = _ApiClient["default"].convertToType(data['failedTelephoneNumbers'], ['String']);
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], [_OrderStatusResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return OrderStatus;
}();
/**
 * The requestId.
 * @member {String} requestId
 */


OrderStatus.prototype['requestId'] = undefined;
/**
 * The status of the request (IN_PROGRESS, COMPLETE, PARTIAL_COMPLETE, or FAILED).
 * @member {String} status
 */

OrderStatus.prototype['status'] = undefined;
/**
 * The telephone numbers whose lookup failed
 * @member {Array.<String>} failedTelephoneNumbers
 */

OrderStatus.prototype['failedTelephoneNumbers'] = undefined;
/**
 * The carrier information results for the specified telephone number.
 * @member {Array.<module:model/OrderStatusResult>} result
 */

OrderStatus.prototype['result'] = undefined;
var _default = OrderStatus;
exports["default"] = _default;