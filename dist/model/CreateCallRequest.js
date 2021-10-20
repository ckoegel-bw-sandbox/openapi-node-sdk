"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MachineDetectionConfiguration = _interopRequireDefault(require("./MachineDetectionConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCallRequest model module.
 * @module model/CreateCallRequest
 * @version 1.0.0
 */
var CreateCallRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCallRequest</code>.
   * @alias module:model/CreateCallRequest
   * @param from {String} Format is E164
   * @param to {String} Format is E164 or SIP URI
   * @param answerUrl {String} 
   * @param applicationId {String} 
   */
  function CreateCallRequest(from, to, answerUrl, applicationId) {
    _classCallCheck(this, CreateCallRequest);

    CreateCallRequest.initialize(this, from, to, answerUrl, applicationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCallRequest, null, [{
    key: "initialize",
    value: function initialize(obj, from, to, answerUrl, applicationId) {
      obj['from'] = from;
      obj['to'] = to;
      obj['answerUrl'] = answerUrl;
      obj['applicationId'] = applicationId;
    }
    /**
     * Constructs a <code>CreateCallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCallRequest} obj Optional instance to populate.
     * @return {module:model/CreateCallRequest} The populated <code>CreateCallRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCallRequest();

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('uui')) {
          obj['uui'] = _ApiClient["default"].convertToType(data['uui'], 'String');
        }

        if (data.hasOwnProperty('callTimeout')) {
          obj['callTimeout'] = _ApiClient["default"].convertToType(data['callTimeout'], 'Number');
        }

        if (data.hasOwnProperty('callbackTimeout')) {
          obj['callbackTimeout'] = _ApiClient["default"].convertToType(data['callbackTimeout'], 'Number');
        }

        if (data.hasOwnProperty('answerUrl')) {
          obj['answerUrl'] = _ApiClient["default"].convertToType(data['answerUrl'], 'String');
        }

        if (data.hasOwnProperty('answerFallbackUrl')) {
          obj['answerFallbackUrl'] = _ApiClient["default"].convertToType(data['answerFallbackUrl'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('fallbackUsername')) {
          obj['fallbackUsername'] = _ApiClient["default"].convertToType(data['fallbackUsername'], 'String');
        }

        if (data.hasOwnProperty('fallbackPassword')) {
          obj['fallbackPassword'] = _ApiClient["default"].convertToType(data['fallbackPassword'], 'String');
        }

        if (data.hasOwnProperty('answerMethod')) {
          obj['answerMethod'] = _ApiClient["default"].convertToType(data['answerMethod'], 'String');
        }

        if (data.hasOwnProperty('answerFallbackMethod')) {
          obj['answerFallbackMethod'] = _ApiClient["default"].convertToType(data['answerFallbackMethod'], 'String');
        }

        if (data.hasOwnProperty('disconnectUrl')) {
          obj['disconnectUrl'] = _ApiClient["default"].convertToType(data['disconnectUrl'], 'String');
        }

        if (data.hasOwnProperty('disconnectMethod')) {
          obj['disconnectMethod'] = _ApiClient["default"].convertToType(data['disconnectMethod'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('machineDetection')) {
          obj['machineDetection'] = _MachineDetectionConfiguration["default"].constructFromObject(data['machineDetection']);
        }
      }

      return obj;
    }
  }]);

  return CreateCallRequest;
}();
/**
 * Format is E164
 * @member {String} from
 */


CreateCallRequest.prototype['from'] = undefined;
/**
 * Format is E164 or SIP URI
 * @member {String} to
 */

CreateCallRequest.prototype['to'] = undefined;
/**
 * A comma-separated list of 'User-To-User' headers to be sent in the INVITE when calling a SIP URI. Each value must end with an 'encoding' parameter as described in https://tools.ietf.org/html/rfc7433. Only 'jwt' and 'base64' encodings are allowed. The entire value cannot exceed 350 characters, including parameters and separators.
 * @member {String} uui
 */

CreateCallRequest.prototype['uui'] = undefined;
/**
 * @member {Number} callTimeout
 */

CreateCallRequest.prototype['callTimeout'] = undefined;
/**
 * @member {Number} callbackTimeout
 */

CreateCallRequest.prototype['callbackTimeout'] = undefined;
/**
 * @member {String} answerUrl
 */

CreateCallRequest.prototype['answerUrl'] = undefined;
/**
 * @member {String} answerFallbackUrl
 */

CreateCallRequest.prototype['answerFallbackUrl'] = undefined;
/**
 * @member {String} username
 */

CreateCallRequest.prototype['username'] = undefined;
/**
 * @member {String} password
 */

CreateCallRequest.prototype['password'] = undefined;
/**
 * @member {String} fallbackUsername
 */

CreateCallRequest.prototype['fallbackUsername'] = undefined;
/**
 * @member {String} fallbackPassword
 */

CreateCallRequest.prototype['fallbackPassword'] = undefined;
/**
 * @member {module:model/CreateCallRequest.AnswerMethodEnum} answerMethod
 */

CreateCallRequest.prototype['answerMethod'] = undefined;
/**
 * @member {module:model/CreateCallRequest.AnswerFallbackMethodEnum} answerFallbackMethod
 */

CreateCallRequest.prototype['answerFallbackMethod'] = undefined;
/**
 * @member {String} disconnectUrl
 */

CreateCallRequest.prototype['disconnectUrl'] = undefined;
/**
 * @member {module:model/CreateCallRequest.DisconnectMethodEnum} disconnectMethod
 */

CreateCallRequest.prototype['disconnectMethod'] = undefined;
/**
 * @member {String} tag
 */

CreateCallRequest.prototype['tag'] = undefined;
/**
 * @member {String} applicationId
 */

CreateCallRequest.prototype['applicationId'] = undefined;
/**
 * @member {module:model/MachineDetectionConfiguration} machineDetection
 */

CreateCallRequest.prototype['machineDetection'] = undefined;
/**
 * Allowed values for the <code>answerMethod</code> property.
 * @enum {String}
 * @readonly
 */

CreateCallRequest['AnswerMethodEnum'] = {
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
/**
 * Allowed values for the <code>answerFallbackMethod</code> property.
 * @enum {String}
 * @readonly
 */

CreateCallRequest['AnswerFallbackMethodEnum'] = {
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
/**
 * Allowed values for the <code>disconnectMethod</code> property.
 * @enum {String}
 * @readonly
 */

CreateCallRequest['DisconnectMethodEnum'] = {
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
var _default = CreateCallRequest;
exports["default"] = _default;