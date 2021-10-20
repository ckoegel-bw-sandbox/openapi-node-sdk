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
 * The Diversion model module.
 * @module model/Diversion
 * @version 1.0.0
 */
var Diversion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Diversion</code>.
   * @alias module:model/Diversion
   */
  function Diversion() {
    _classCallCheck(this, Diversion);

    Diversion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Diversion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Diversion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Diversion} obj Optional instance to populate.
     * @return {module:model/Diversion} The populated <code>Diversion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Diversion();

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('privacy')) {
          obj['privacy'] = _ApiClient["default"].convertToType(data['privacy'], 'String');
        }

        if (data.hasOwnProperty('unknown')) {
          obj['unknown'] = _ApiClient["default"].convertToType(data['unknown'], 'String');
        }

        if (data.hasOwnProperty('origTo')) {
          obj['origTo'] = _ApiClient["default"].convertToType(data['origTo'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Diversion;
}();
/**
 * @member {String} reason
 */


Diversion.prototype['reason'] = undefined;
/**
 * @member {String} privacy
 */

Diversion.prototype['privacy'] = undefined;
/**
 * @member {String} unknown
 */

Diversion.prototype['unknown'] = undefined;
/**
 * @member {String} origTo
 */

Diversion.prototype['origTo'] = undefined;
var _default = Diversion;
exports["default"] = _default;