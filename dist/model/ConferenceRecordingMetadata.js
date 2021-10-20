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
 * The ConferenceRecordingMetadata model module.
 * @module model/ConferenceRecordingMetadata
 * @version 1.0.0
 */
var ConferenceRecordingMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConferenceRecordingMetadata</code>.
   * @alias module:model/ConferenceRecordingMetadata
   */
  function ConferenceRecordingMetadata() {
    _classCallCheck(this, ConferenceRecordingMetadata);

    ConferenceRecordingMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConferenceRecordingMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConferenceRecordingMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConferenceRecordingMetadata} obj Optional instance to populate.
     * @return {module:model/ConferenceRecordingMetadata} The populated <code>ConferenceRecordingMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConferenceRecordingMetadata();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('conferenceId')) {
          obj['conferenceId'] = _ApiClient["default"].convertToType(data['conferenceId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('recordingId')) {
          obj['recordingId'] = _ApiClient["default"].convertToType(data['recordingId'], 'String');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'String');
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
      }

      return obj;
    }
  }]);

  return ConferenceRecordingMetadata;
}();
/**
 * @member {String} accountId
 */


ConferenceRecordingMetadata.prototype['accountId'] = undefined;
/**
 * @member {String} conferenceId
 */

ConferenceRecordingMetadata.prototype['conferenceId'] = undefined;
/**
 * @member {String} name
 */

ConferenceRecordingMetadata.prototype['name'] = undefined;
/**
 * @member {String} recordingId
 */

ConferenceRecordingMetadata.prototype['recordingId'] = undefined;
/**
 * Format is ISO-8601
 * @member {String} duration
 */

ConferenceRecordingMetadata.prototype['duration'] = undefined;
/**
 * @member {Number} channels
 */

ConferenceRecordingMetadata.prototype['channels'] = undefined;
/**
 * @member {Date} startTime
 */

ConferenceRecordingMetadata.prototype['startTime'] = undefined;
/**
 * @member {Date} endTime
 */

ConferenceRecordingMetadata.prototype['endTime'] = undefined;
/**
 * @member {module:model/ConferenceRecordingMetadata.FileFormatEnum} fileFormat
 */

ConferenceRecordingMetadata.prototype['fileFormat'] = undefined;
/**
 * The current status of the recording. Current possible values are 'processing', 'partial', 'complete', 'deleted', and 'error'. Additional states may be added in the future, so your application must be tolerant of unknown values.
 * @member {String} status
 */

ConferenceRecordingMetadata.prototype['status'] = undefined;
/**
 * @member {String} mediaUrl
 */

ConferenceRecordingMetadata.prototype['mediaUrl'] = undefined;
/**
 * Allowed values for the <code>fileFormat</code> property.
 * @enum {String}
 * @readonly
 */

ConferenceRecordingMetadata['FileFormatEnum'] = {
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
var _default = ConferenceRecordingMetadata;
exports["default"] = _default;