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
 * The PageInfo model module.
 * @module model/PageInfo
 * @version 1.0.0
 */
var PageInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageInfo</code>.
   * @alias module:model/PageInfo
   */
  function PageInfo() {
    _classCallCheck(this, PageInfo);

    PageInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PageInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PageInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageInfo} obj Optional instance to populate.
     * @return {module:model/PageInfo} The populated <code>PageInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageInfo();

        if (data.hasOwnProperty('prevPage')) {
          obj['prevPage'] = _ApiClient["default"].convertToType(data['prevPage'], 'String');
        }

        if (data.hasOwnProperty('nextPage')) {
          obj['nextPage'] = _ApiClient["default"].convertToType(data['nextPage'], 'String');
        }

        if (data.hasOwnProperty('prevPageToken')) {
          obj['prevPageToken'] = _ApiClient["default"].convertToType(data['prevPageToken'], 'String');
        }

        if (data.hasOwnProperty('nextPageToken')) {
          obj['nextPageToken'] = _ApiClient["default"].convertToType(data['nextPageToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PageInfo;
}();
/**
 * The link to the previous page for pagination
 * @member {String} prevPage
 */


PageInfo.prototype['prevPage'] = undefined;
/**
 * The link to the next page for pagination
 * @member {String} nextPage
 */

PageInfo.prototype['nextPage'] = undefined;
/**
 * The isolated pagination token for the previous page
 * @member {String} prevPageToken
 */

PageInfo.prototype['prevPageToken'] = undefined;
/**
 * The isolated pagination token for the next page
 * @member {String} nextPageToken
 */

PageInfo.prototype['nextPageToken'] = undefined;
var _default = PageInfo;
exports["default"] = _default;