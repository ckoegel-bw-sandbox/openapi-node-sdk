"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Diversion = _interopRequireDefault(require("./Diversion"));

var _Transcription = _interopRequireDefault(require("./Transcription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CallCallback model module.
 * @module model/CallCallback
 * @version 1.0.0
 */
var CallCallback = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CallCallback</code>.
   * This object represents all possible fields that may be included in callbacks related to call events, including events that come from BXML verbs
   * @alias module:model/CallCallback
   */
  function CallCallback() {
    _classCallCheck(this, CallCallback);

    CallCallback.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CallCallback, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CallCallback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallCallback} obj Optional instance to populate.
     * @return {module:model/CallCallback} The populated <code>CallCallback</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CallCallback();

        if (data.hasOwnProperty('eventType')) {
          obj['eventType'] = _ApiClient["default"].convertToType(data['eventType'], 'String');
        }

        if (data.hasOwnProperty('eventTime')) {
          obj['eventTime'] = _ApiClient["default"].convertToType(data['eventTime'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('callId')) {
          obj['callId'] = _ApiClient["default"].convertToType(data['callId'], 'String');
        }

        if (data.hasOwnProperty('callUrl')) {
          obj['callUrl'] = _ApiClient["default"].convertToType(data['callUrl'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'String');
        }

        if (data.hasOwnProperty('answerTime')) {
          obj['answerTime'] = _ApiClient["default"].convertToType(data['answerTime'], 'String');
        }

        if (data.hasOwnProperty('transferCallerId')) {
          obj['transferCallerId'] = _ApiClient["default"].convertToType(data['transferCallerId'], 'String');
        }

        if (data.hasOwnProperty('transferTo')) {
          obj['transferTo'] = _ApiClient["default"].convertToType(data['transferTo'], 'String');
        }

        if (data.hasOwnProperty('cause')) {
          obj['cause'] = _ApiClient["default"].convertToType(data['cause'], 'String');
        }

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('errorId')) {
          obj['errorId'] = _ApiClient["default"].convertToType(data['errorId'], 'String');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'String');
        }

        if (data.hasOwnProperty('digit')) {
          obj['digit'] = _ApiClient["default"].convertToType(data['digit'], 'String');
        }

        if (data.hasOwnProperty('parentCallId')) {
          obj['parentCallId'] = _ApiClient["default"].convertToType(data['parentCallId'], 'String');
        }

        if (data.hasOwnProperty('recordingId')) {
          obj['recordingId'] = _ApiClient["default"].convertToType(data['recordingId'], 'String');
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

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('digits')) {
          obj['digits'] = _ApiClient["default"].convertToType(data['digits'], 'String');
        }

        if (data.hasOwnProperty('terminatingDigit')) {
          obj['terminatingDigit'] = _ApiClient["default"].convertToType(data['terminatingDigit'], 'String');
        }

        if (data.hasOwnProperty('transcription')) {
          obj['transcription'] = _Transcription["default"].constructFromObject(data['transcription']);
        }

        if (data.hasOwnProperty('diversion')) {
          obj['diversion'] = _Diversion["default"].constructFromObject(data['diversion']);
        }
      }

      return obj;
    }
  }]);

  return CallCallback;
}();
/**
 * @member {String} eventType
 */


CallCallback.prototype['eventType'] = undefined;
/**
 * @member {String} eventTime
 */

CallCallback.prototype['eventTime'] = undefined;
/**
 * @member {String} accountId
 */

CallCallback.prototype['accountId'] = undefined;
/**
 * @member {String} applicationId
 */

CallCallback.prototype['applicationId'] = undefined;
/**
 * @member {String} from
 */

CallCallback.prototype['from'] = undefined;
/**
 * @member {String} to
 */

CallCallback.prototype['to'] = undefined;
/**
 * @member {String} direction
 */

CallCallback.prototype['direction'] = undefined;
/**
 * @member {String} callId
 */

CallCallback.prototype['callId'] = undefined;
/**
 * @member {String} callUrl
 */

CallCallback.prototype['callUrl'] = undefined;
/**
 * @member {String} startTime
 */

CallCallback.prototype['startTime'] = undefined;
/**
 * @member {String} answerTime
 */

CallCallback.prototype['answerTime'] = undefined;
/**
 * @member {String} transferCallerId
 */

CallCallback.prototype['transferCallerId'] = undefined;
/**
 * @member {String} transferTo
 */

CallCallback.prototype['transferTo'] = undefined;
/**
 * @member {String} cause
 */

CallCallback.prototype['cause'] = undefined;
/**
 * @member {String} errorMessage
 */

CallCallback.prototype['errorMessage'] = undefined;
/**
 * @member {String} errorId
 */

CallCallback.prototype['errorId'] = undefined;
/**
 * @member {String} endTime
 */

CallCallback.prototype['endTime'] = undefined;
/**
 * @member {String} digit
 */

CallCallback.prototype['digit'] = undefined;
/**
 * @member {String} parentCallId
 */

CallCallback.prototype['parentCallId'] = undefined;
/**
 * @member {String} recordingId
 */

CallCallback.prototype['recordingId'] = undefined;
/**
 * @member {String} duration
 */

CallCallback.prototype['duration'] = undefined;
/**
 * @member {String} fileFormat
 */

CallCallback.prototype['fileFormat'] = undefined;
/**
 * @member {String} mediaUrl
 */

CallCallback.prototype['mediaUrl'] = undefined;
/**
 * @member {String} tag
 */

CallCallback.prototype['tag'] = undefined;
/**
 * @member {Number} channels
 */

CallCallback.prototype['channels'] = undefined;
/**
 * @member {String} status
 */

CallCallback.prototype['status'] = undefined;
/**
 * @member {String} digits
 */

CallCallback.prototype['digits'] = undefined;
/**
 * @member {String} terminatingDigit
 */

CallCallback.prototype['terminatingDigit'] = undefined;
/**
 * @member {module:model/Transcription} transcription
 */

CallCallback.prototype['transcription'] = undefined;
/**
 * @member {module:model/Diversion} diversion
 */

CallCallback.prototype['diversion'] = undefined;
var _default = CallCallback;
exports["default"] = _default;