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
 * The CallState model module.
 * @module model/CallState
 * @version 1.0.0
 */
var CallState = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CallState</code>.
   * @alias module:model/CallState
   */
  function CallState() {
    _classCallCheck(this, CallState);

    CallState.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CallState, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CallState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallState} obj Optional instance to populate.
     * @return {module:model/CallState} The populated <code>CallState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CallState();

        if (data.hasOwnProperty('callId')) {
          obj['callId'] = _ApiClient["default"].convertToType(data['callId'], 'String');
        }

        if (data.hasOwnProperty('parentCallId')) {
          obj['parentCallId'] = _ApiClient["default"].convertToType(data['parentCallId'], 'String');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('identity')) {
          obj['identity'] = _ApiClient["default"].convertToType(data['identity'], 'String');
        }

        if (data.hasOwnProperty('stirShaken')) {
          obj['stirShaken'] = _ApiClient["default"].convertToType(data['stirShaken'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('answerTime')) {
          obj['answerTime'] = _ApiClient["default"].convertToType(data['answerTime'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'Date');
        }

        if (data.hasOwnProperty('disconnectCause')) {
          obj['disconnectCause'] = _ApiClient["default"].convertToType(data['disconnectCause'], 'String');
        }

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }

        if (data.hasOwnProperty('errorId')) {
          obj['errorId'] = _ApiClient["default"].convertToType(data['errorId'], 'String');
        }

        if (data.hasOwnProperty('lastUpdate')) {
          obj['lastUpdate'] = _ApiClient["default"].convertToType(data['lastUpdate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return CallState;
}();
/**
 * @member {String} callId
 */


CallState.prototype['callId'] = undefined;
/**
 * @member {String} parentCallId
 */

CallState.prototype['parentCallId'] = undefined;
/**
 * @member {String} applicationId
 */

CallState.prototype['applicationId'] = undefined;
/**
 * @member {String} accountId
 */

CallState.prototype['accountId'] = undefined;
/**
 * @member {String} to
 */

CallState.prototype['to'] = undefined;
/**
 * @member {String} from
 */

CallState.prototype['from'] = undefined;
/**
 * @member {String} direction
 */

CallState.prototype['direction'] = undefined;
/**
 * The current state of the call. Current possible values are 'initiated', 'answered' and 'disconnected'. Additional states may be added in the future, so your application must be tolerant of unknown values.
 * @member {String} state
 */

CallState.prototype['state'] = undefined;
/**
 * @member {String} identity
 */

CallState.prototype['identity'] = undefined;
/**
 * @member {Object.<String, String>} stirShaken
 */

CallState.prototype['stirShaken'] = undefined;
/**
 * @member {Date} startTime
 */

CallState.prototype['startTime'] = undefined;
/**
 * @member {Date} answerTime
 */

CallState.prototype['answerTime'] = undefined;
/**
 * @member {Date} endTime
 */

CallState.prototype['endTime'] = undefined;
/**
 * The reason the call was disconnected, or null if the call is still active. Current values are 'cancel', 'timeout', 'busy', 'rejected', 'hangup', 'invalid-bxml', 'callback-error', 'application-error', 'error', 'account-limit', 'node-capacity-exceeded' and 'unknown'. Additional causes may be added in the future, so your application must be tolerant of unknown values.
 * @member {String} disconnectCause
 */

CallState.prototype['disconnectCause'] = undefined;
/**
 * @member {String} errorMessage
 */

CallState.prototype['errorMessage'] = undefined;
/**
 * @member {String} errorId
 */

CallState.prototype['errorId'] = undefined;
/**
 * @member {Date} lastUpdate
 */

CallState.prototype['lastUpdate'] = undefined;
var _default = CallState;
exports["default"] = _default;