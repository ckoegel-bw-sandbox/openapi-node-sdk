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
 * The ModifyConferenceRequest model module.
 * @module model/ModifyConferenceRequest
 * @version 1.0.0
 */
var ModifyConferenceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModifyConferenceRequest</code>.
   * @alias module:model/ModifyConferenceRequest
   */
  function ModifyConferenceRequest() {
    _classCallCheck(this, ModifyConferenceRequest);

    ModifyConferenceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyConferenceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyConferenceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyConferenceRequest} obj Optional instance to populate.
     * @return {module:model/ModifyConferenceRequest} The populated <code>ModifyConferenceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyConferenceRequest();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('redirectUrl')) {
          obj['redirectUrl'] = _ApiClient["default"].convertToType(data['redirectUrl'], 'String');
        }

        if (data.hasOwnProperty('redirectFallbackUrl')) {
          obj['redirectFallbackUrl'] = _ApiClient["default"].convertToType(data['redirectFallbackUrl'], 'String');
        }

        if (data.hasOwnProperty('redirectMethod')) {
          obj['redirectMethod'] = _ApiClient["default"].convertToType(data['redirectMethod'], 'String');
        }

        if (data.hasOwnProperty('redirectFallbackMethod')) {
          obj['redirectFallbackMethod'] = _ApiClient["default"].convertToType(data['redirectFallbackMethod'], 'String');
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
      }

      return obj;
    }
  }]);

  return ModifyConferenceRequest;
}();
/**
 * @member {module:model/ModifyConferenceRequest.StatusEnum} status
 */


ModifyConferenceRequest.prototype['status'] = undefined;
/**
 * @member {String} redirectUrl
 */

ModifyConferenceRequest.prototype['redirectUrl'] = undefined;
/**
 * @member {String} redirectFallbackUrl
 */

ModifyConferenceRequest.prototype['redirectFallbackUrl'] = undefined;
/**
 * @member {module:model/ModifyConferenceRequest.RedirectMethodEnum} redirectMethod
 */

ModifyConferenceRequest.prototype['redirectMethod'] = undefined;
/**
 * @member {module:model/ModifyConferenceRequest.RedirectFallbackMethodEnum} redirectFallbackMethod
 */

ModifyConferenceRequest.prototype['redirectFallbackMethod'] = undefined;
/**
 * @member {String} username
 */

ModifyConferenceRequest.prototype['username'] = undefined;
/**
 * @member {String} password
 */

ModifyConferenceRequest.prototype['password'] = undefined;
/**
 * @member {String} fallbackUsername
 */

ModifyConferenceRequest.prototype['fallbackUsername'] = undefined;
/**
 * @member {String} fallbackPassword
 */

ModifyConferenceRequest.prototype['fallbackPassword'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ModifyConferenceRequest['StatusEnum'] = {
  /**
   * value: "active"
   * @const
   */
  "active": "active",

  /**
   * value: "completed"
   * @const
   */
  "completed": "completed"
};
/**
 * Allowed values for the <code>redirectMethod</code> property.
 * @enum {String}
 * @readonly
 */

ModifyConferenceRequest['RedirectMethodEnum'] = {
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
 * Allowed values for the <code>redirectFallbackMethod</code> property.
 * @enum {String}
 * @readonly
 */

ModifyConferenceRequest['RedirectFallbackMethodEnum'] = {
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
var _default = ModifyConferenceRequest;
exports["default"] = _default;