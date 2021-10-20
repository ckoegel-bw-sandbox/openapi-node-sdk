"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConferenceMemberState = _interopRequireDefault(require("./ConferenceMemberState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConferenceState model module.
 * @module model/ConferenceState
 * @version 1.0.0
 */
var ConferenceState = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConferenceState</code>.
   * @alias module:model/ConferenceState
   */
  function ConferenceState() {
    _classCallCheck(this, ConferenceState);

    ConferenceState.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConferenceState, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConferenceState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConferenceState} obj Optional instance to populate.
     * @return {module:model/ConferenceState} The populated <code>ConferenceState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConferenceState();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('createdTime')) {
          obj['createdTime'] = _ApiClient["default"].convertToType(data['createdTime'], 'Date');
        }

        if (data.hasOwnProperty('completedTime')) {
          obj['completedTime'] = _ApiClient["default"].convertToType(data['completedTime'], 'Date');
        }

        if (data.hasOwnProperty('conferenceEventUrl')) {
          obj['conferenceEventUrl'] = _ApiClient["default"].convertToType(data['conferenceEventUrl'], 'String');
        }

        if (data.hasOwnProperty('conferenceEventMethod')) {
          obj['conferenceEventMethod'] = _ApiClient["default"].convertToType(data['conferenceEventMethod'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('activeMembers')) {
          obj['activeMembers'] = _ApiClient["default"].convertToType(data['activeMembers'], [_ConferenceMemberState["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConferenceState;
}();
/**
 * @member {String} id
 */


ConferenceState.prototype['id'] = undefined;
/**
 * @member {String} name
 */

ConferenceState.prototype['name'] = undefined;
/**
 * @member {Date} createdTime
 */

ConferenceState.prototype['createdTime'] = undefined;
/**
 * @member {Date} completedTime
 */

ConferenceState.prototype['completedTime'] = undefined;
/**
 * @member {String} conferenceEventUrl
 */

ConferenceState.prototype['conferenceEventUrl'] = undefined;
/**
 * @member {module:model/ConferenceState.ConferenceEventMethodEnum} conferenceEventMethod
 */

ConferenceState.prototype['conferenceEventMethod'] = undefined;
/**
 * @member {String} tag
 */

ConferenceState.prototype['tag'] = undefined;
/**
 * @member {Array.<module:model/ConferenceMemberState>} activeMembers
 */

ConferenceState.prototype['activeMembers'] = undefined;
/**
 * Allowed values for the <code>conferenceEventMethod</code> property.
 * @enum {String}
 * @readonly
 */

ConferenceState['ConferenceEventMethodEnum'] = {
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
var _default = ConferenceState;
exports["default"] = _default;