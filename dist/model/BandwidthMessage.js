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
 * The BandwidthMessage model module.
 * @module model/BandwidthMessage
 * @version 1.0.0
 */
var BandwidthMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BandwidthMessage</code>.
   * @alias module:model/BandwidthMessage
   */
  function BandwidthMessage() {
    _classCallCheck(this, BandwidthMessage);

    BandwidthMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BandwidthMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BandwidthMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BandwidthMessage} obj Optional instance to populate.
     * @return {module:model/BandwidthMessage} The populated <code>BandwidthMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BandwidthMessage();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'String');
        }

        if (data.hasOwnProperty('segmentCount')) {
          obj['segmentCount'] = _ApiClient["default"].convertToType(data['segmentCount'], 'Number');
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], ['String']);
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('media')) {
          obj['media'] = _ApiClient["default"].convertToType(data['media'], ['String']);
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BandwidthMessage;
}();
/**
 * The id of the message
 * @member {String} id
 */


BandwidthMessage.prototype['id'] = undefined;
/**
 * The Bandwidth phone number associated with the message
 * @member {String} owner
 */

BandwidthMessage.prototype['owner'] = undefined;
/**
 * The application ID associated with the message
 * @member {String} applicationId
 */

BandwidthMessage.prototype['applicationId'] = undefined;
/**
 * The datetime stamp of the message in ISO 8601
 * @member {String} time
 */

BandwidthMessage.prototype['time'] = undefined;
/**
 * The number of segments the original message from the user is broken into before sending over to carrier networks
 * @member {Number} segmentCount
 */

BandwidthMessage.prototype['segmentCount'] = undefined;
/**
 * The direction of the message relative to Bandwidth. Can be in or out
 * @member {String} direction
 */

BandwidthMessage.prototype['direction'] = undefined;
/**
 * The phone number recipients of the message
 * @member {Array.<String>} to
 */

BandwidthMessage.prototype['to'] = undefined;
/**
 * The phone number the message was sent from
 * @member {String} from
 */

BandwidthMessage.prototype['from'] = undefined;
/**
 * The list of media URLs sent in the message. Including a `filename` field in the `Content-Disposition` header of the media linked with a URL will set the displayed file name. This is a best practice to ensure that your media has a readable file name.
 * @member {Array.<String>} media
 */

BandwidthMessage.prototype['media'] = undefined;
/**
 * The contents of the message
 * @member {String} text
 */

BandwidthMessage.prototype['text'] = undefined;
/**
 * The custom string set by the user
 * @member {String} tag
 */

BandwidthMessage.prototype['tag'] = undefined;
/**
 * The priority specified by the user
 * @member {String} priority
 */

BandwidthMessage.prototype['priority'] = undefined;
var _default = BandwidthMessage;
exports["default"] = _default;