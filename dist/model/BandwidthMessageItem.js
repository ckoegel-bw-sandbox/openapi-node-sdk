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
 * The BandwidthMessageItem model module.
 * @module model/BandwidthMessageItem
 * @version 1.0.0
 */
var BandwidthMessageItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BandwidthMessageItem</code>.
   * @alias module:model/BandwidthMessageItem
   */
  function BandwidthMessageItem() {
    _classCallCheck(this, BandwidthMessageItem);

    BandwidthMessageItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BandwidthMessageItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BandwidthMessageItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BandwidthMessageItem} obj Optional instance to populate.
     * @return {module:model/BandwidthMessageItem} The populated <code>BandwidthMessageItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BandwidthMessageItem();

        if (data.hasOwnProperty('messageId')) {
          obj['messageId'] = _ApiClient["default"].convertToType(data['messageId'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('sourceTn')) {
          obj['sourceTn'] = _ApiClient["default"].convertToType(data['sourceTn'], 'String');
        }

        if (data.hasOwnProperty('destinationTn')) {
          obj['destinationTn'] = _ApiClient["default"].convertToType(data['destinationTn'], 'String');
        }

        if (data.hasOwnProperty('messageStatus')) {
          obj['messageStatus'] = _ApiClient["default"].convertToType(data['messageStatus'], 'String');
        }

        if (data.hasOwnProperty('messageDirection')) {
          obj['messageDirection'] = _ApiClient["default"].convertToType(data['messageDirection'], 'String');
        }

        if (data.hasOwnProperty('messageType')) {
          obj['messageType'] = _ApiClient["default"].convertToType(data['messageType'], 'String');
        }

        if (data.hasOwnProperty('segmentCount')) {
          obj['segmentCount'] = _ApiClient["default"].convertToType(data['segmentCount'], 'Number');
        }

        if (data.hasOwnProperty('errorCode')) {
          obj['errorCode'] = _ApiClient["default"].convertToType(data['errorCode'], 'Number');
        }

        if (data.hasOwnProperty('receiveTime')) {
          obj['receiveTime'] = _ApiClient["default"].convertToType(data['receiveTime'], 'String');
        }

        if (data.hasOwnProperty('carrierName')) {
          obj['carrierName'] = _ApiClient["default"].convertToType(data['carrierName'], 'String');
        }

        if (data.hasOwnProperty('messageSize')) {
          obj['messageSize'] = _ApiClient["default"].convertToType(data['messageSize'], 'Number');
        }

        if (data.hasOwnProperty('messageLength')) {
          obj['messageLength'] = _ApiClient["default"].convertToType(data['messageLength'], 'Number');
        }

        if (data.hasOwnProperty('attachmentCount')) {
          obj['attachmentCount'] = _ApiClient["default"].convertToType(data['attachmentCount'], 'Number');
        }

        if (data.hasOwnProperty('recipientCount')) {
          obj['recipientCount'] = _ApiClient["default"].convertToType(data['recipientCount'], 'Number');
        }

        if (data.hasOwnProperty('campaignClass')) {
          obj['campaignClass'] = _ApiClient["default"].convertToType(data['campaignClass'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BandwidthMessageItem;
}();
/**
 * The message id
 * @member {String} messageId
 */


BandwidthMessageItem.prototype['messageId'] = undefined;
/**
 * The account id of the message
 * @member {String} accountId
 */

BandwidthMessageItem.prototype['accountId'] = undefined;
/**
 * The source phone number of the message
 * @member {String} sourceTn
 */

BandwidthMessageItem.prototype['sourceTn'] = undefined;
/**
 * The recipient phone number of the message
 * @member {String} destinationTn
 */

BandwidthMessageItem.prototype['destinationTn'] = undefined;
/**
 * The status of the message
 * @member {String} messageStatus
 */

BandwidthMessageItem.prototype['messageStatus'] = undefined;
/**
 * The direction of the message relative to Bandwidth. INBOUND or OUTBOUND
 * @member {String} messageDirection
 */

BandwidthMessageItem.prototype['messageDirection'] = undefined;
/**
 * The type of message. sms or mms
 * @member {String} messageType
 */

BandwidthMessageItem.prototype['messageType'] = undefined;
/**
 * The number of segments the message was sent as
 * @member {Number} segmentCount
 */

BandwidthMessageItem.prototype['segmentCount'] = undefined;
/**
 * The numeric error code of the message
 * @member {Number} errorCode
 */

BandwidthMessageItem.prototype['errorCode'] = undefined;
/**
 * The ISO 8601 datetime of the message
 * @member {String} receiveTime
 */

BandwidthMessageItem.prototype['receiveTime'] = undefined;
/**
 * The name of the carrier. Not currently supported for MMS, coming soon
 * @member {String} carrierName
 */

BandwidthMessageItem.prototype['carrierName'] = undefined;
/**
 * The size of the message including message content and headers
 * @member {Number} messageSize
 */

BandwidthMessageItem.prototype['messageSize'] = undefined;
/**
 * The length of the message content
 * @member {Number} messageLength
 */

BandwidthMessageItem.prototype['messageLength'] = undefined;
/**
 * The number of attachments the message has
 * @member {Number} attachmentCount
 */

BandwidthMessageItem.prototype['attachmentCount'] = undefined;
/**
 * The number of recipients the message has
 * @member {Number} recipientCount
 */

BandwidthMessageItem.prototype['recipientCount'] = undefined;
/**
 * The campaign class of the message, if it has one
 * @member {String} campaignClass
 */

BandwidthMessageItem.prototype['campaignClass'] = undefined;
var _default = BandwidthMessageItem;
exports["default"] = _default;