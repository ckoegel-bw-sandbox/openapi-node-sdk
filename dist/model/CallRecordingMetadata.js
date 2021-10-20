"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TranscriptionMetadata = _interopRequireDefault(require("./TranscriptionMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CallRecordingMetadata model module.
 * @module model/CallRecordingMetadata
 * @version 1.0.0
 */
var CallRecordingMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CallRecordingMetadata</code>.
   * @alias module:model/CallRecordingMetadata
   */
  function CallRecordingMetadata() {
    _classCallCheck(this, CallRecordingMetadata);

    CallRecordingMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CallRecordingMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CallRecordingMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallRecordingMetadata} obj Optional instance to populate.
     * @return {module:model/CallRecordingMetadata} The populated <code>CallRecordingMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CallRecordingMetadata();

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('callId')) {
          obj['callId'] = _ApiClient["default"].convertToType(data['callId'], 'String');
        }

        if (data.hasOwnProperty('parentCallId')) {
          obj['parentCallId'] = _ApiClient["default"].convertToType(data['parentCallId'], 'String');
        }

        if (data.hasOwnProperty('recordingId')) {
          obj['recordingId'] = _ApiClient["default"].convertToType(data['recordingId'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('transferCallerId')) {
          obj['transferCallerId'] = _ApiClient["default"].convertToType(data['transferCallerId'], 'String');
        }

        if (data.hasOwnProperty('transferTo')) {
          obj['transferTo'] = _ApiClient["default"].convertToType(data['transferTo'], 'String');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'String');
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], 'Number');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'Date');
        }

        if (data.hasOwnProperty('fileFormat')) {
          obj['fileFormat'] = _ApiClient["default"].convertToType(data['fileFormat'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('mediaUrl')) {
          obj['mediaUrl'] = _ApiClient["default"].convertToType(data['mediaUrl'], 'String');
        }

        if (data.hasOwnProperty('transcription')) {
          obj['transcription'] = _TranscriptionMetadata["default"].constructFromObject(data['transcription']);
        }
      }

      return obj;
    }
  }]);

  return CallRecordingMetadata;
}();
/**
 * @member {String} applicationId
 */


CallRecordingMetadata.prototype['applicationId'] = undefined;
/**
 * @member {String} accountId
 */

CallRecordingMetadata.prototype['accountId'] = undefined;
/**
 * @member {String} callId
 */

CallRecordingMetadata.prototype['callId'] = undefined;
/**
 * @member {String} parentCallId
 */

CallRecordingMetadata.prototype['parentCallId'] = undefined;
/**
 * @member {String} recordingId
 */

CallRecordingMetadata.prototype['recordingId'] = undefined;
/**
 * @member {String} to
 */

CallRecordingMetadata.prototype['to'] = undefined;
/**
 * @member {String} from
 */

CallRecordingMetadata.prototype['from'] = undefined;
/**
 * @member {String} transferCallerId
 */

CallRecordingMetadata.prototype['transferCallerId'] = undefined;
/**
 * @member {String} transferTo
 */

CallRecordingMetadata.prototype['transferTo'] = undefined;
/**
 * Format is ISO-8601
 * @member {String} duration
 */

CallRecordingMetadata.prototype['duration'] = undefined;
/**
 * @member {module:model/CallRecordingMetadata.DirectionEnum} direction
 */

CallRecordingMetadata.prototype['direction'] = undefined;
/**
 * @member {Number} channels
 */

CallRecordingMetadata.prototype['channels'] = undefined;
/**
 * @member {Date} startTime
 */

CallRecordingMetadata.prototype['startTime'] = undefined;
/**
 * @member {Date} endTime
 */

CallRecordingMetadata.prototype['endTime'] = undefined;
/**
 * @member {module:model/CallRecordingMetadata.FileFormatEnum} fileFormat
 */

CallRecordingMetadata.prototype['fileFormat'] = undefined;
/**
 * The current status of the recording. Current values are 'processing', 'partial', 'complete', 'deleted' and 'error'. Additional states may be added in the future, so your application must be tolerant of unknown values.
 * @member {String} status
 */

CallRecordingMetadata.prototype['status'] = undefined;
/**
 * @member {String} mediaUrl
 */

CallRecordingMetadata.prototype['mediaUrl'] = undefined;
/**
 * @member {module:model/TranscriptionMetadata} transcription
 */

CallRecordingMetadata.prototype['transcription'] = undefined;
/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */

CallRecordingMetadata['DirectionEnum'] = {
  /**
   * value: "inbound"
   * @const
   */
  "inbound": "inbound",

  /**
   * value: "outbound"
   * @const
   */
  "outbound": "outbound"
};
/**
 * Allowed values for the <code>fileFormat</code> property.
 * @enum {String}
 * @readonly
 */

CallRecordingMetadata['FileFormatEnum'] = {
  /**
   * value: "mp3"
   * @const
   */
  "mp3": "mp3",

  /**
   * value: "wav"
   * @const
   */
  "wav": "wav"
};
var _default = CallRecordingMetadata;
exports["default"] = _default;