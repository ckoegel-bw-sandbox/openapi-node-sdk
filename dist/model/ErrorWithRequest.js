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
 * The ErrorWithRequest model module.
 * @module model/ErrorWithRequest
 * @version 1.0.0
 */
var ErrorWithRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorWithRequest</code>.
   * @alias module:model/ErrorWithRequest
   */
  function ErrorWithRequest() {
    _classCallCheck(this, ErrorWithRequest);

    ErrorWithRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorWithRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorWithRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorWithRequest} obj Optional instance to populate.
     * @return {module:model/ErrorWithRequest} The populated <code>ErrorWithRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorWithRequest();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ErrorWithRequest;
}();
/**
 * An error message pertaining to what the issue could be
 * @member {String} error
 */


ErrorWithRequest.prototype['error'] = undefined;
/**
 * The associated requestId from AWS
 * @member {String} requestId
 */

ErrorWithRequest.prototype['requestId'] = undefined;
var _default = ErrorWithRequest;
exports["default"] = _default;