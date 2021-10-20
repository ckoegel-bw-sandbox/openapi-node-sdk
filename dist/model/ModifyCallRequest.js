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
 * The ModifyCallRequest model module.
 * @module model/ModifyCallRequest
 * @version 1.0.0
 */
var ModifyCallRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModifyCallRequest</code>.
   * @alias module:model/ModifyCallRequest
   */
  function ModifyCallRequest() {
    _classCallCheck(this, ModifyCallRequest);

    ModifyCallRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyCallRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyCallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyCallRequest} obj Optional instance to populate.
     * @return {module:model/ModifyCallRequest} The populated <code>ModifyCallRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyCallRequest();

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
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

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyCallRequest;
}();
/**
 * @member {module:model/ModifyCallRequest.StateEnum} state
 * @default 'active'
 */


ModifyCallRequest.prototype['state'] = 'active';
/**
 * Required if state is 'active'
 * @member {String} redirectUrl
 */

ModifyCallRequest.prototype['redirectUrl'] = undefined;
/**
 * @member {String} redirectFallbackUrl
 */

ModifyCallRequest.prototype['redirectFallbackUrl'] = undefined;
/**
 * @member {module:model/ModifyCallRequest.RedirectMethodEnum} redirectMethod
 */

ModifyCallRequest.prototype['redirectMethod'] = undefined;
/**
 * @member {module:model/ModifyCallRequest.RedirectFallbackMethodEnum} redirectFallbackMethod
 */

ModifyCallRequest.prototype['redirectFallbackMethod'] = undefined;
/**
 * @member {String} username
 */

ModifyCallRequest.prototype['username'] = undefined;
/**
 * @member {String} password
 */

ModifyCallRequest.prototype['password'] = undefined;
/**
 * @member {String} fallbackUsername
 */

ModifyCallRequest.prototype['fallbackUsername'] = undefined;
/**
 * @member {String} fallbackPassword
 */

ModifyCallRequest.prototype['fallbackPassword'] = undefined;
/**
 * @member {String} tag
 */

ModifyCallRequest.prototype['tag'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

ModifyCallRequest['StateEnum'] = {
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

ModifyCallRequest['RedirectMethodEnum'] = {
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

ModifyCallRequest['RedirectFallbackMethodEnum'] = {
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
var _default = ModifyCallRequest;
exports["default"] = _default;