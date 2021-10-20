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
 * The ParticipantSubscription model module.
 * @module model/ParticipantSubscription
 * @version 1.0.0
 */
var ParticipantSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParticipantSubscription</code>.
   * @alias module:model/ParticipantSubscription
   * @param participantId {String} Participant the subscriber should be subscribed to
   */
  function ParticipantSubscription(participantId) {
    _classCallCheck(this, ParticipantSubscription);

    ParticipantSubscription.initialize(this, participantId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ParticipantSubscription, null, [{
    key: "initialize",
    value: function initialize(obj, participantId) {
      obj['participantId'] = participantId;
    }
    /**
     * Constructs a <code>ParticipantSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParticipantSubscription} obj Optional instance to populate.
     * @return {module:model/ParticipantSubscription} The populated <code>ParticipantSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParticipantSubscription();

        if (data.hasOwnProperty('participantId')) {
          obj['participantId'] = _ApiClient["default"].convertToType(data['participantId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ParticipantSubscription;
}();
/**
 * Participant the subscriber should be subscribed to
 * @member {String} participantId
 */


ParticipantSubscription.prototype['participantId'] = undefined;
var _default = ParticipantSubscription;
exports["default"] = _default;