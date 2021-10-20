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
 * The CreateCallResponse model module.
 * @module model/CreateCallResponse
 * @version 1.0.0
 */
var CreateCallResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCallResponse</code>.
   * @alias module:model/CreateCallResponse
   * @param accountId {String} 
   * @param callId {String} 
   * @param applicationId {String} 
   * @param to {String} 
   * @param from {String} 
   * @param callUrl {String} 
   * @param answerUrl {String} 
   * @param answerMethod {module:model/CreateCallResponse.AnswerMethodEnum} 
   * @param disconnectMethod {module:model/CreateCallResponse.DisconnectMethodEnum} 
   */
  function CreateCallResponse(accountId, callId, applicationId, to, from, callUrl, answerUrl, answerMethod, disconnectMethod) {
    _classCallCheck(this, CreateCallResponse);

    CreateCallResponse.initialize(this, accountId, callId, applicationId, to, from, callUrl, answerUrl, answerMethod, disconnectMethod);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCallResponse, null, [{
    key: "initialize",
    value: function initialize(obj, accountId, callId, applicationId, to, from, callUrl, answerUrl, answerMethod, disconnectMethod) {
      obj['accountId'] = accountId;
      obj['callId'] = callId;
      obj['applicationId'] = applicationId;
      obj['to'] = to;
      obj['from'] = from;
      obj['callUrl'] = callUrl;
      obj['answerUrl'] = answerUrl;
      obj['answerMethod'] = answerMethod;
      obj['disconnectMethod'] = disconnectMethod;
    }
    /**
     * Constructs a <code>CreateCallResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCallResponse} obj Optional instance to populate.
     * @return {module:model/CreateCallResponse} The populated <code>CreateCallResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCallResponse();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('callId')) {
          obj['callId'] = _ApiClient["default"].convertToType(data['callId'], 'String');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('callUrl')) {
          obj['callUrl'] = _ApiClient["default"].convertToType(data['callUrl'], 'String');
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

        if (data.hasOwnProperty('answerMethod')) {
          obj['answerMethod'] = _ApiClient["default"].convertToType(data['answerMethod'], 'String');
        }

        if (data.hasOwnProperty('answerFallbackUrl')) {
          obj['answerFallbackUrl'] = _ApiClient["default"].convertToType(data['answerFallbackUrl'], 'String');
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

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCallResponse;
}();
/**
 * @member {String} accountId
 */


CreateCallResponse.prototype['accountId'] = undefined;
/**
 * @member {String} callId
 */

CreateCallResponse.prototype['callId'] = undefined;
/**
 * @member {String} applicationId
 */

CreateCallResponse.prototype['applicationId'] = undefined;
/**
 * @member {String} to
 */

CreateCallResponse.prototype['to'] = undefined;
/**
 * @member {String} from
 */

CreateCallResponse.prototype['from'] = undefined;
/**
 * @member {Date} startTime
 */

CreateCallResponse.prototype['startTime'] = undefined;
/**
 * @member {String} callUrl
 */

CreateCallResponse.prototype['callUrl'] = undefined;
/**
 * @member {Number} callTimeout
 */

CreateCallResponse.prototype['callTimeout'] = undefined;
/**
 * @member {Number} callbackTimeout
 */

CreateCallResponse.prototype['callbackTimeout'] = undefined;
/**
 * @member {String} answerUrl
 */

CreateCallResponse.prototype['answerUrl'] = undefined;
/**
 * @member {module:model/CreateCallResponse.AnswerMethodEnum} answerMethod
 */

CreateCallResponse.prototype['answerMethod'] = undefined;
/**
 * @member {String} answerFallbackUrl
 */

CreateCallResponse.prototype['answerFallbackUrl'] = undefined;
/**
 * @member {module:model/CreateCallResponse.AnswerFallbackMethodEnum} answerFallbackMethod
 */

CreateCallResponse.prototype['answerFallbackMethod'] = undefined;
/**
 * @member {String} disconnectUrl
 */

CreateCallResponse.prototype['disconnectUrl'] = undefined;
/**
 * @member {module:model/CreateCallResponse.DisconnectMethodEnum} disconnectMethod
 */

CreateCallResponse.prototype['disconnectMethod'] = undefined;
/**
 * @member {String} username
 */

CreateCallResponse.prototype['username'] = undefined;
/**
 * @member {String} password
 */

CreateCallResponse.prototype['password'] = undefined;
/**
 * @member {String} fallbackUsername
 */

CreateCallResponse.prototype['fallbackUsername'] = undefined;
/**
 * @member {String} fallbackPassword
 */

CreateCallResponse.prototype['fallbackPassword'] = undefined;
/**
 * @member {String} tag
 */

CreateCallResponse.prototype['tag'] = undefined;
/**
 * Allowed values for the <code>answerMethod</code> property.
 * @enum {String}
 * @readonly
 */

CreateCallResponse['AnswerMethodEnum'] = {
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

CreateCallResponse['AnswerFallbackMethodEnum'] = {
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

CreateCallResponse['DisconnectMethodEnum'] = {
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
var _default = CreateCallResponse;
exports["default"] = _default;