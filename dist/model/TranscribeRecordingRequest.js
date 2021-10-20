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
 * The TranscribeRecordingRequest model module.
 * @module model/TranscribeRecordingRequest
 * @version 1.0.0
 */
var TranscribeRecordingRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TranscribeRecordingRequest</code>.
   * @alias module:model/TranscribeRecordingRequest
   */
  function TranscribeRecordingRequest() {
    _classCallCheck(this, TranscribeRecordingRequest);

    TranscribeRecordingRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TranscribeRecordingRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TranscribeRecordingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranscribeRecordingRequest} obj Optional instance to populate.
     * @return {module:model/TranscribeRecordingRequest} The populated <code>TranscribeRecordingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TranscribeRecordingRequest();

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('callbackMethod')) {
          obj['callbackMethod'] = _ApiClient["default"].convertToType(data['callbackMethod'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('callbackTimeout')) {
          obj['callbackTimeout'] = _ApiClient["default"].convertToType(data['callbackTimeout'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TranscribeRecordingRequest;
}();
/**
 * @member {String} callbackUrl
 */


TranscribeRecordingRequest.prototype['callbackUrl'] = undefined;
/**
 * @member {module:model/TranscribeRecordingRequest.CallbackMethodEnum} callbackMethod
 */

TranscribeRecordingRequest.prototype['callbackMethod'] = undefined;
/**
 * @member {String} username
 */

TranscribeRecordingRequest.prototype['username'] = undefined;
/**
 * @member {String} password
 */

TranscribeRecordingRequest.prototype['password'] = undefined;
/**
 * @member {String} tag
 */

TranscribeRecordingRequest.prototype['tag'] = undefined;
/**
 * @member {Number} callbackTimeout
 */

TranscribeRecordingRequest.prototype['callbackTimeout'] = undefined;
/**
 * Allowed values for the <code>callbackMethod</code> property.
 * @enum {String}
 * @readonly
 */

TranscribeRecordingRequest['CallbackMethodEnum'] = {
  /**
   * value: "POST"
   * @const
   */
  "POST": "POST",

  /**
   * value: "GET"
   * @const
   */
  "GET": "GET"
};
var _default = TranscribeRecordingRequest;
exports["default"] = _default;