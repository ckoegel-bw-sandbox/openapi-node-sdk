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
 * The TwoFactorVerifyCodeResponse model module.
 * @module model/TwoFactorVerifyCodeResponse
 * @version 1.0.0
 */
var TwoFactorVerifyCodeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TwoFactorVerifyCodeResponse</code>.
   * @alias module:model/TwoFactorVerifyCodeResponse
   */
  function TwoFactorVerifyCodeResponse() {
    _classCallCheck(this, TwoFactorVerifyCodeResponse);

    TwoFactorVerifyCodeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TwoFactorVerifyCodeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TwoFactorVerifyCodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwoFactorVerifyCodeResponse} obj Optional instance to populate.
     * @return {module:model/TwoFactorVerifyCodeResponse} The populated <code>TwoFactorVerifyCodeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TwoFactorVerifyCodeResponse();

        if (data.hasOwnProperty('valid')) {
          obj['valid'] = _ApiClient["default"].convertToType(data['valid'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TwoFactorVerifyCodeResponse;
}();
/**
 * @member {Boolean} valid
 */


TwoFactorVerifyCodeResponse.prototype['valid'] = undefined;
var _default = TwoFactorVerifyCodeResponse;
exports["default"] = _default;