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
 * The ConferenceCallback model module.
 * @module model/ConferenceCallback
 * @version 1.0.0
 */
var ConferenceCallback = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConferenceCallback</code>.
   * This object represents all possible fields that may be included in callbacks related to conference events
   * @alias module:model/ConferenceCallback
   */
  function ConferenceCallback() {
    _classCallCheck(this, ConferenceCallback);

    ConferenceCallback.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConferenceCallback, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConferenceCallback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConferenceCallback} obj Optional instance to populate.
     * @return {module:model/ConferenceCallback} The populated <code>ConferenceCallback</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConferenceCallback();

        if (data.hasOwnProperty('conferenceId')) {
          obj['conferenceId'] = _ApiClient["default"].convertToType(data['conferenceId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('eventType')) {
          obj['eventType'] = _ApiClient["default"].convertToType(data['eventType'], 'String');
        }

        if (data.hasOwnProperty('eventTime')) {
          obj['eventTime'] = _ApiClient["default"].convertToType(data['eventTime'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('callId')) {
          obj['callId'] = _ApiClient["default"].convertToType(data['callId'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('recordingId')) {
          obj['recordingId'] = _ApiClient["default"].convertToType(data['recordingId'], 'String');
        }

        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], 'Number');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'String');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'String');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'String');
        }

        if (data.hasOwnProperty('fileFormat')) {
          obj['fileFormat'] = _ApiClient["default"].convertToType(data['fileFormat'], 'String');
        }

        if (data.hasOwnProperty('mediaUrl')) {
          obj['mediaUrl'] = _ApiClient["default"].convertToType(data['mediaUrl'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConferenceCallback;
}();
/**
 * @member {String} conferenceId
 */


ConferenceCallback.prototype['conferenceId'] = undefined;
/**
 * @member {String} name
 */

ConferenceCallback.prototype['name'] = undefined;
/**
 * @member {String} eventType
 */

ConferenceCallback.prototype['eventType'] = undefined;
/**
 * @member {String} eventTime
 */

ConferenceCallback.prototype['eventTime'] = undefined;
/**
 * @member {String} tag
 */

ConferenceCallback.prototype['tag'] = undefined;
/**
 * @member {String} callId
 */

ConferenceCallback.prototype['callId'] = undefined;
/**
 * @member {String} to
 */

ConferenceCallback.prototype['to'] = undefined;
/**
 * @member {String} from
 */

ConferenceCallback.prototype['from'] = undefined;
/**
 * @member {String} accountId
 */

ConferenceCallback.prototype['accountId'] = undefined;
/**
 * @member {String} recordingId
 */

ConferenceCallback.prototype['recordingId'] = undefined;
/**
 * @member {Number} channels
 */

ConferenceCallback.prototype['channels'] = undefined;
/**
 * @member {String} startTime
 */

ConferenceCallback.prototype['startTime'] = undefined;
/**
 * @member {String} endTime
 */

ConferenceCallback.prototype['endTime'] = undefined;
/**
 * @member {String} duration
 */

ConferenceCallback.prototype['duration'] = undefined;
/**
 * @member {String} fileFormat
 */

ConferenceCallback.prototype['fileFormat'] = undefined;
/**
 * @member {String} mediaUrl
 */

ConferenceCallback.prototype['mediaUrl'] = undefined;
/**
 * @member {String} status
 */

ConferenceCallback.prototype['status'] = undefined;
var _default = ConferenceCallback;
exports["default"] = _default;