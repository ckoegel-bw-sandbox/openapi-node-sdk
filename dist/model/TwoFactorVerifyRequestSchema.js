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
 * The TwoFactorVerifyRequestSchema model module.
 * @module model/TwoFactorVerifyRequestSchema
 * @version 1.0.0
 */
var TwoFactorVerifyRequestSchema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TwoFactorVerifyRequestSchema</code>.
   * @alias module:model/TwoFactorVerifyRequestSchema
   * @param to {String} The phone number to send the 2fa code to.
   * @param applicationId {String} The application unique ID, obtained from Bandwidth.
   * @param expirationTimeInMinutes {Number} The time period, in minutes, to validate the 2fa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for expiration time is between 0 and 15 minutes, exclusively and inclusively, respectively.
   * @param code {String} The generated 2fa code to check if valid
   */
  function TwoFactorVerifyRequestSchema(to, applicationId, expirationTimeInMinutes, code) {
    _classCallCheck(this, TwoFactorVerifyRequestSchema);

    TwoFactorVerifyRequestSchema.initialize(this, to, applicationId, expirationTimeInMinutes, code);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TwoFactorVerifyRequestSchema, null, [{
    key: "initialize",
    value: function initialize(obj, to, applicationId, expirationTimeInMinutes, code) {
      obj['to'] = to;
      obj['applicationId'] = applicationId;
      obj['expirationTimeInMinutes'] = expirationTimeInMinutes;
      obj['code'] = code;
    }
    /**
     * Constructs a <code>TwoFactorVerifyRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwoFactorVerifyRequestSchema} obj Optional instance to populate.
     * @return {module:model/TwoFactorVerifyRequestSchema} The populated <code>TwoFactorVerifyRequestSchema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TwoFactorVerifyRequestSchema();

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('expirationTimeInMinutes')) {
          obj['expirationTimeInMinutes'] = _ApiClient["default"].convertToType(data['expirationTimeInMinutes'], 'Number');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TwoFactorVerifyRequestSchema;
}();
/**
 * The phone number to send the 2fa code to.
 * @member {String} to
 */


TwoFactorVerifyRequestSchema.prototype['to'] = undefined;
/**
 * The application unique ID, obtained from Bandwidth.
 * @member {String} applicationId
 */

TwoFactorVerifyRequestSchema.prototype['applicationId'] = undefined;
/**
 * An optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \"2FA\".
 * @member {String} scope
 */

TwoFactorVerifyRequestSchema.prototype['scope'] = undefined;
/**
 * The time period, in minutes, to validate the 2fa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for expiration time is between 0 and 15 minutes, exclusively and inclusively, respectively.
 * @member {Number} expirationTimeInMinutes
 */

TwoFactorVerifyRequestSchema.prototype['expirationTimeInMinutes'] = undefined;
/**
 * The generated 2fa code to check if valid
 * @member {String} code
 */

TwoFactorVerifyRequestSchema.prototype['code'] = undefined;
var _default = TwoFactorVerifyRequestSchema;
exports["default"] = _default;