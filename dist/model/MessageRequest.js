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
 * The MessageRequest model module.
 * @module model/MessageRequest
 * @version 1.0.0
 */
var MessageRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MessageRequest</code>.
   * @alias module:model/MessageRequest
   * @param applicationId {String} The ID of the Application your from number is associated with in the Bandwidth Phone Number Dashboard.
   * @param to {Array.<String>} The phone number(s) the message should be sent to in E164 format
   * @param from {String} One of your telephone numbers the message should come from in E164 format
   */
  function MessageRequest(applicationId, to, from) {
    _classCallCheck(this, MessageRequest);

    MessageRequest.initialize(this, applicationId, to, from);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MessageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, applicationId, to, from) {
      obj['applicationId'] = applicationId;
      obj['to'] = to;
      obj['from'] = from;
    }
    /**
     * Constructs a <code>MessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageRequest} obj Optional instance to populate.
     * @return {module:model/MessageRequest} The populated <code>MessageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MessageRequest();

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], ['String']);
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('media')) {
          obj['media'] = _ApiClient["default"].convertToType(data['media'], ['String']);
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

  return MessageRequest;
}();
/**
 * The ID of the Application your from number is associated with in the Bandwidth Phone Number Dashboard.
 * @member {String} applicationId
 */


MessageRequest.prototype['applicationId'] = undefined;
/**
 * The phone number(s) the message should be sent to in E164 format
 * @member {Array.<String>} to
 */

MessageRequest.prototype['to'] = undefined;
/**
 * One of your telephone numbers the message should come from in E164 format
 * @member {String} from
 */

MessageRequest.prototype['from'] = undefined;
/**
 * The contents of the text message. Must be 2048 characters or less.
 * @member {String} text
 */

MessageRequest.prototype['text'] = undefined;
/**
 * A list of URLs to include as media attachments as part of the message.
 * @member {Array.<String>} media
 */

MessageRequest.prototype['media'] = undefined;
/**
 * A custom string that will be included in callback events of the message. Max 1024 characters
 * @member {String} tag
 */

MessageRequest.prototype['tag'] = undefined;
/**
 * The message's priority, currently for toll-free or short code SMS only. Messages with a priority value of `\"high\"` are given preference over your other traffic.
 * @member {module:model/MessageRequest.PriorityEnum} priority
 */

MessageRequest.prototype['priority'] = undefined;
/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */

MessageRequest['PriorityEnum'] = {
  /**
   * value: "default"
   * @const
   */
  "default": "default",

  /**
   * value: "high"
   * @const
   */
  "high": "high"
};
var _default = MessageRequest;
exports["default"] = _default;