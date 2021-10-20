"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Participant model module.
 * @module model/Participant
 * @version 1.0.0
 */
var Participant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Participant</code>.
   * A participant object
   * @alias module:model/Participant
   */
  function Participant() {
    _classCallCheck(this, Participant);

    Participant.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Participant, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Participant} obj Optional instance to populate.
     * @return {module:model/Participant} The populated <code>Participant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Participant();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('publishPermissions')) {
          obj['publishPermissions'] = _ApiClient["default"].convertToType(data['publishPermissions'], ['String']);
        }

        if (data.hasOwnProperty('sessions')) {
          obj['sessions'] = _ApiClient["default"].convertToType(data['sessions'], ['String']);
        }

        if (data.hasOwnProperty('subscriptions')) {
          obj['subscriptions'] = _Subscriptions["default"].constructFromObject(data['subscriptions']);
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('deviceApiVersion')) {
          obj['deviceApiVersion'] = _ApiClient["default"].convertToType(data['deviceApiVersion'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Participant;
}();
/**
 * Unique id of the participant
 * @member {String} id
 */


Participant.prototype['id'] = undefined;
/**
 * Full callback url to use for notifications about this participant
 * @member {String} callbackUrl
 */

Participant.prototype['callbackUrl'] = undefined;
/**
 * Defines if this participant can publish audio or video
 * @member {Array.<module:model/Participant.PublishPermissionsEnum>} publishPermissions
 */

Participant.prototype['publishPermissions'] = undefined;
/**
 * List of session ids this participant is associated with  Capped to one 
 * @member {Array.<String>} sessions
 */

Participant.prototype['sessions'] = undefined;
/**
 * @member {module:model/Subscriptions} subscriptions
 */

Participant.prototype['subscriptions'] = undefined;
/**
 * User defined tag to associate with the participant
 * @member {String} tag
 */

Participant.prototype['tag'] = undefined;
/**
 * Optional field to define the device api version of this participant
 * @member {module:model/Participant.DeviceApiVersionEnum} deviceApiVersion
 * @default 'V2'
 */

Participant.prototype['deviceApiVersion'] = 'V2';
/**
 * Allowed values for the <code>publishPermissions</code> property.
 * @enum {String}
 * @readonly
 */

Participant['PublishPermissionsEnum'] = {
  /**
   * value: "AUDIO"
   * @const
   */
  "AUDIO": "AUDIO",

  /**
   * value: "VIDEO"
   * @const
   */
  "VIDEO": "VIDEO"
};
/**
 * Allowed values for the <code>deviceApiVersion</code> property.
 * @enum {String}
 * @readonly
 */

Participant['DeviceApiVersionEnum'] = {
  /**
   * value: "V3"
   * @const
   */
  "V3": "V3",

  /**
   * value: "V2"
   * @const
   */
  "V2": "V2"
};
var _default = Participant;
exports["default"] = _default;