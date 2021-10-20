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
 * The MachineDetectionConfiguration model module.
 * @module model/MachineDetectionConfiguration
 * @version 1.0.0
 */
var MachineDetectionConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MachineDetectionConfiguration</code>.
   * @alias module:model/MachineDetectionConfiguration
   */
  function MachineDetectionConfiguration() {
    _classCallCheck(this, MachineDetectionConfiguration);

    MachineDetectionConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MachineDetectionConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MachineDetectionConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MachineDetectionConfiguration} obj Optional instance to populate.
     * @return {module:model/MachineDetectionConfiguration} The populated <code>MachineDetectionConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MachineDetectionConfiguration();

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }

        if (data.hasOwnProperty('detectionTimeout')) {
          obj['detectionTimeout'] = _ApiClient["default"].convertToType(data['detectionTimeout'], 'Number');
        }

        if (data.hasOwnProperty('silenceTimeout')) {
          obj['silenceTimeout'] = _ApiClient["default"].convertToType(data['silenceTimeout'], 'Number');
        }

        if (data.hasOwnProperty('speechThreshold')) {
          obj['speechThreshold'] = _ApiClient["default"].convertToType(data['speechThreshold'], 'Number');
        }

        if (data.hasOwnProperty('speechEndThreshold')) {
          obj['speechEndThreshold'] = _ApiClient["default"].convertToType(data['speechEndThreshold'], 'Number');
        }

        if (data.hasOwnProperty('delayResult')) {
          obj['delayResult'] = _ApiClient["default"].convertToType(data['delayResult'], 'Boolean');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('callbackMethod')) {
          obj['callbackMethod'] = _ApiClient["default"].convertToType(data['callbackMethod'], 'String');
        }

        if (data.hasOwnProperty('fallbackUrl')) {
          obj['fallbackUrl'] = _ApiClient["default"].convertToType(data['fallbackUrl'], 'String');
        }

        if (data.hasOwnProperty('fallbackMethod')) {
          obj['fallbackMethod'] = _ApiClient["default"].convertToType(data['fallbackMethod'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('fallbackUsername')) {
          obj['fallbackUsername'] = _ApiClient["default"].convertToType(data['fallbackUsername'], 'String');
        }

        if (data.hasOwnProperty('fallbackPassword')) {
          obj['fallbackPassword'] = _ApiClient["default"].convertToType(data['fallbackPassword'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MachineDetectionConfiguration;
}();
/**
 * The machine detection mode. If set to 'async', the detection result will be sent in a 'machineDetectionComplete' callback. If set to 'sync', the 'answer' callback will wait for the machine detection to complete and will include its result. Default is 'async'.
 * @member {module:model/MachineDetectionConfiguration.ModeEnum} mode
 */


MachineDetectionConfiguration.prototype['mode'] = undefined;
/**
 * Total amount of time (in seconds) before giving up.
 * @member {Number} detectionTimeout
 */

MachineDetectionConfiguration.prototype['detectionTimeout'] = undefined;
/**
 * If no speech is detected in this period, a callback with a 'silence' result is sent. Default is 10 seconds.
 * @member {Number} silenceTimeout
 */

MachineDetectionConfiguration.prototype['silenceTimeout'] = undefined;
/**
 * When speech has ended and a result couldn't be determined based on the audio content itself, this value is used to determine if the speaker is a machine based on the speech duration. If the length of the speech detected is greater than or equal to this threshold, the result will be 'answering-machine'. If the length of speech detected is below this threshold, the result will be 'human'. Default is 10 seconds.
 * @member {Number} speechThreshold
 */

MachineDetectionConfiguration.prototype['speechThreshold'] = undefined;
/**
 * Amount of silence (in seconds) before assuming the callee has finished speaking.
 * @member {Number} speechEndThreshold
 */

MachineDetectionConfiguration.prototype['speechEndThreshold'] = undefined;
/**
 * If set to 'true' and if an answering machine is detected, the 'answering-machine' callback will be delayed until the machine is done speaking or until the 'detectionTimeout' is exceeded. If false, the 'answering-machine' result is sent immediately. Default is 'false'.
 * @member {Boolean} delayResult
 */

MachineDetectionConfiguration.prototype['delayResult'] = undefined;
/**
 * The URL to send the 'machineDetectionComplete' callback when the detection is completed. Only for 'async' mode.
 * @member {String} callbackUrl
 */

MachineDetectionConfiguration.prototype['callbackUrl'] = undefined;
/**
 * @member {module:model/MachineDetectionConfiguration.CallbackMethodEnum} callbackMethod
 */

MachineDetectionConfiguration.prototype['callbackMethod'] = undefined;
/**
 * @member {String} fallbackUrl
 */

MachineDetectionConfiguration.prototype['fallbackUrl'] = undefined;
/**
 * @member {module:model/MachineDetectionConfiguration.FallbackMethodEnum} fallbackMethod
 */

MachineDetectionConfiguration.prototype['fallbackMethod'] = undefined;
/**
 * @member {String} username
 */

MachineDetectionConfiguration.prototype['username'] = undefined;
/**
 * @member {String} password
 */

MachineDetectionConfiguration.prototype['password'] = undefined;
/**
 * @member {String} fallbackUsername
 */

MachineDetectionConfiguration.prototype['fallbackUsername'] = undefined;
/**
 * @member {String} fallbackPassword
 */

MachineDetectionConfiguration.prototype['fallbackPassword'] = undefined;
/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */

MachineDetectionConfiguration['ModeEnum'] = {
  /**
   * value: "sync"
   * @const
   */
  "sync": "sync",

  /**
   * value: "async"
   * @const
   */
  "async": "async"
};
/**
 * Allowed values for the <code>callbackMethod</code> property.
 * @enum {String}
 * @readonly
 */

MachineDetectionConfiguration['CallbackMethodEnum'] = {
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
/**
 * Allowed values for the <code>fallbackMethod</code> property.
 * @enum {String}
 * @readonly
 */

MachineDetectionConfiguration['FallbackMethodEnum'] = {
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
var _default = MachineDetectionConfiguration;
exports["default"] = _default;