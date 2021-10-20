"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BandwidthMessageItem = _interopRequireDefault(require("./BandwidthMessageItem"));

var _PageInfo = _interopRequireDefault(require("./PageInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BandwidthMessagesList model module.
 * @module model/BandwidthMessagesList
 * @version 1.0.0
 */
var BandwidthMessagesList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BandwidthMessagesList</code>.
   * @alias module:model/BandwidthMessagesList
   */
  function BandwidthMessagesList() {
    _classCallCheck(this, BandwidthMessagesList);

    BandwidthMessagesList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BandwidthMessagesList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BandwidthMessagesList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BandwidthMessagesList} obj Optional instance to populate.
     * @return {module:model/BandwidthMessagesList} The populated <code>BandwidthMessagesList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BandwidthMessagesList();

        if (data.hasOwnProperty('totalCount')) {
          obj['totalCount'] = _ApiClient["default"].convertToType(data['totalCount'], 'Number');
        }

        if (data.hasOwnProperty('pageInfo')) {
          obj['pageInfo'] = _PageInfo["default"].constructFromObject(data['pageInfo']);
        }

        if (data.hasOwnProperty('messages')) {
          obj['messages'] = _ApiClient["default"].convertToType(data['messages'], [_BandwidthMessageItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BandwidthMessagesList;
}();
/**
 * Total number of messages matched by the search
 * @member {Number} totalCount
 */


BandwidthMessagesList.prototype['totalCount'] = undefined;
/**
 * @member {module:model/PageInfo} pageInfo
 */

BandwidthMessagesList.prototype['pageInfo'] = undefined;
/**
 * @member {Array.<module:model/BandwidthMessageItem>} messages
 */

BandwidthMessagesList.prototype['messages'] = undefined;
var _default = BandwidthMessagesList;
exports["default"] = _default;