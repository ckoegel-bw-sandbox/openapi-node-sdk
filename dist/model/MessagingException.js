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
 * The MessagingException model module.
 * @module model/MessagingException
 * @version 1.0.0
 */
var MessagingException = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MessagingException</code>.
   * @alias module:model/MessagingException
   * @param type {String} 
   * @param description {String} 
   */
  function MessagingException(type, description) {
    _classCallCheck(this, MessagingException);

    MessagingException.initialize(this, type, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MessagingException, null, [{
    key: "initialize",
    value: function initialize(obj, type, description) {
      obj['type'] = type;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>MessagingException</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessagingException} obj Optional instance to populate.
     * @return {module:model/MessagingException} The populated <code>MessagingException</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MessagingException();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MessagingException;
}();
/**
 * @member {String} type
 */


MessagingException.prototype['type'] = undefined;
/**
 * @member {String} description
 */

MessagingException.prototype['description'] = undefined;
var _default = MessagingException;
exports["default"] = _default;