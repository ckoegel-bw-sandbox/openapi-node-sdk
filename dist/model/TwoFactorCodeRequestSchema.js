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
 * The TwoFactorCodeRequestSchema model module.
 * @module model/TwoFactorCodeRequestSchema
 * @version 1.0.0
 */
var TwoFactorCodeRequestSchema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TwoFactorCodeRequestSchema</code>.
   * @alias module:model/TwoFactorCodeRequestSchema
   * @param to {String} The phone number to send the 2fa code to.
   * @param from {String} The application phone number, the sender of the 2fa code.
   * @param applicationId {String} The application unique ID, obtained from Bandwidth.
   * @param message {String} The message format of the 2fa code.  There are three values that the system will replace \"{CODE}\", \"{NAME}\", \"{SCOPE}\".  The \"{SCOPE}\" and \"{NAME} value template are optional, while \"{CODE}\" must be supplied.  As the name would suggest, code will be replace with the actual 2fa code.  Name is replaced with the application name, configured during provisioning of 2fa.  The scope value is the same value sent during the call and partitioned by the server.
   * @param digits {Number} The number of digits for your 2fa code.  The valid number ranges from 2 to 8, inclusively.
   */
  function TwoFactorCodeRequestSchema(to, from, applicationId, message, digits) {
    _classCallCheck(this, TwoFactorCodeRequestSchema);

    TwoFactorCodeRequestSchema.initialize(this, to, from, applicationId, message, digits);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TwoFactorCodeRequestSchema, null, [{
    key: "initialize",
    value: function initialize(obj, to, from, applicationId, message, digits) {
      obj['to'] = to;
      obj['from'] = from;
      obj['applicationId'] = applicationId;
      obj['message'] = message;
      obj['digits'] = digits;
    }
    /**
     * Constructs a <code>TwoFactorCodeRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwoFactorCodeRequestSchema} obj Optional instance to populate.
     * @return {module:model/TwoFactorCodeRequestSchema} The populated <code>TwoFactorCodeRequestSchema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TwoFactorCodeRequestSchema();

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('digits')) {
          obj['digits'] = _ApiClient["default"].convertToType(data['digits'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TwoFactorCodeRequestSchema;
}();
/**
 * The phone number to send the 2fa code to.
 * @member {String} to
 */


TwoFactorCodeRequestSchema.prototype['to'] = undefined;
/**
 * The application phone number, the sender of the 2fa code.
 * @member {String} from
 */

TwoFactorCodeRequestSchema.prototype['from'] = undefined;
/**
 * The application unique ID, obtained from Bandwidth.
 * @member {String} applicationId
 */

TwoFactorCodeRequestSchema.prototype['applicationId'] = undefined;
/**
 * An optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \"2FA\".
 * @member {String} scope
 */

TwoFactorCodeRequestSchema.prototype['scope'] = undefined;
/**
 * The message format of the 2fa code.  There are three values that the system will replace \"{CODE}\", \"{NAME}\", \"{SCOPE}\".  The \"{SCOPE}\" and \"{NAME} value template are optional, while \"{CODE}\" must be supplied.  As the name would suggest, code will be replace with the actual 2fa code.  Name is replaced with the application name, configured during provisioning of 2fa.  The scope value is the same value sent during the call and partitioned by the server.
 * @member {String} message
 */

TwoFactorCodeRequestSchema.prototype['message'] = undefined;
/**
 * The number of digits for your 2fa code.  The valid number ranges from 2 to 8, inclusively.
 * @member {Number} digits
 */

TwoFactorCodeRequestSchema.prototype['digits'] = undefined;
var _default = TwoFactorCodeRequestSchema;
exports["default"] = _default;