"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Participants service.
* @module api/ParticipantsApi
* @version 1.0.0
*/
var ParticipantsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ParticipantsApi. 
  * @alias module:api/ParticipantsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ParticipantsApi(apiClient) {
    _classCallCheck(this, ParticipantsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createParticipant operation.
   * @callback module:api/ParticipantsApi~createParticipantCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Participant
   * Create a new participant under this account.  Participants are idempotent, so relevant parameters must be set in this function if desired. 
   * @param {String} accountId Account ID
   * @param {Object} opts Optional parameters
   * @param {module:model/Participant} opts.participant Participant parameters
   * @param {module:api/ParticipantsApi~createParticipantCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse200}
   */


  _createClass(ParticipantsApi, [{
    key: "createParticipant",
    value: function createParticipant(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['participant']; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling createParticipant");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      var basePaths = ['https://api.webrtc.bandwidth.com/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new _Error["default"]("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/participants', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the deleteParticipant operation.
     * @callback module:api/ParticipantsApi~deleteParticipantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Participant
     * Delete participant by ID.
     * @param {String} accountId Account ID
     * @param {String} participantId 
     * @param {module:api/ParticipantsApi~deleteParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteParticipant",
    value: function deleteParticipant(accountId, participantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling deleteParticipant");
      } // verify the required parameter 'participantId' is set


      if (participantId === undefined || participantId === null) {
        throw new _Error["default"]("Missing the required parameter 'participantId' when calling deleteParticipant");
      }

      var pathParams = {
        'accountId': accountId,
        'participantId': participantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      var basePaths = ['https://api.webrtc.bandwidth.com/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new _Error["default"]("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/participants/{participantId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getParticipant operation.
     * @callback module:api/ParticipantsApi~getParticipantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Participant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Participant
     * Get participant by ID.
     * @param {String} accountId Account ID
     * @param {String} participantId Participant ID
     * @param {module:api/ParticipantsApi~getParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Participant}
     */

  }, {
    key: "getParticipant",
    value: function getParticipant(accountId, participantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling getParticipant");
      } // verify the required parameter 'participantId' is set


      if (participantId === undefined || participantId === null) {
        throw new _Error["default"]("Missing the required parameter 'participantId' when calling getParticipant");
      }

      var pathParams = {
        'accountId': accountId,
        'participantId': participantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Participant["default"];
      var basePaths = ['https://api.webrtc.bandwidth.com/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new _Error["default"]("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/participants/{participantId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return ParticipantsApi;
}();

exports["default"] = ParticipantsApi;