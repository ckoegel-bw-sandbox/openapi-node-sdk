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
 * The ModifyCallRecordingRequest model module.
 * @module model/ModifyCallRecordingRequest
 * @version 1.0.0
 */
var ModifyCallRecordingRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModifyCallRecordingRequest</code>.
   * @alias module:model/ModifyCallRecordingRequest
   * @param state {module:model/ModifyCallRecordingRequest.StateEnum} 
   */
  function ModifyCallRecordingRequest(state) {
    _classCallCheck(this, ModifyCallRecordingRequest);

    ModifyCallRecordingRequest.initialize(this, state);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyCallRecordingRequest, null, [{
    key: "initialize",
    value: function initialize(obj, state) {
      obj['state'] = state;
    }
    /**
     * Constructs a <code>ModifyCallRecordingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyCallRecordingRequest} obj Optional instance to populate.
     * @return {module:model/ModifyCallRecordingRequest} The populated <code>ModifyCallRecordingRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyCallRecordingRequest();

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyCallRecordingRequest;
}();
/**
 * @member {module:model/ModifyCallRecordingRequest.StateEnum} state
 */


ModifyCallRecordingRequest.prototype['state'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

ModifyCallRecordingRequest['StateEnum'] = {
  /**
   * value: "NOT_RECORDING"
   * @const
   */
  "NOT_RECORDING": "NOT_RECORDING",

  /**
   * value: "PAUSED"
   * @const
   */
  "PAUSED": "PAUSED",

  /**
   * value: "RECORDING"
   * @const
   */
  "RECORDING": "RECORDING"
};
var _default = ModifyCallRecordingRequest;
exports["default"] = _default;