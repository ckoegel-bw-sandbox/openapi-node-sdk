"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ParticipantSubscription = _interopRequireDefault(require("./ParticipantSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Subscriptions model module.
 * @module model/Subscriptions
 * @version 1.0.0
 */
var Subscriptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Subscriptions</code>.
   * @alias module:model/Subscriptions
   * @param sessionId {String} Session the subscriptions are associated with  If this is the only field, the subscriber will be subscribed to all participants in the session (including any participants that are later added to the session) 
   */
  function Subscriptions(sessionId) {
    _classCallCheck(this, Subscriptions);

    Subscriptions.initialize(this, sessionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Subscriptions, null, [{
    key: "initialize",
    value: function initialize(obj, sessionId) {
      obj['sessionId'] = sessionId;
    }
    /**
     * Constructs a <code>Subscriptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subscriptions} obj Optional instance to populate.
     * @return {module:model/Subscriptions} The populated <code>Subscriptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Subscriptions();

        if (data.hasOwnProperty('sessionId')) {
          obj['sessionId'] = _ApiClient["default"].convertToType(data['sessionId'], 'String');
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_ParticipantSubscription["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Subscriptions;
}();
/**
 * Session the subscriptions are associated with  If this is the only field, the subscriber will be subscribed to all participants in the session (including any participants that are later added to the session) 
 * @member {String} sessionId
 */


Subscriptions.prototype['sessionId'] = undefined;
/**
 * Subset of participants to subscribe to in the session. Optional.
 * @member {Array.<module:model/ParticipantSubscription>} participants
 */

Subscriptions.prototype['participants'] = undefined;
var _default = Subscriptions;
exports["default"] = _default;