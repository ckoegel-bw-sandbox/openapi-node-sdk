"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _CallState = _interopRequireDefault(require("../model/CallState"));

var _CreateCallRequest = _interopRequireDefault(require("../model/CreateCallRequest"));

var _CreateCallResponse = _interopRequireDefault(require("../model/CreateCallResponse"));

var _ModifyCallRequest = _interopRequireDefault(require("../model/ModifyCallRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Calls service.
* @module api/CallsApi
* @version 1.0.0
*/
var CallsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CallsApi. 
  * @alias module:api/CallsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CallsApi(apiClient) {
    _classCallCheck(this, CallsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createCall operation.
   * @callback module:api/CallsApi~createCallCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CreateCallResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Call
   * Creates an outbound phone call.
   * @param {String} accountId 
   * @param {module:model/CreateCallRequest} createCallRequest 
   * @param {module:api/CallsApi~createCallCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CreateCallResponse}
   */


  _createClass(CallsApi, [{
    key: "createCall",
    value: function createCall(accountId, createCallRequest, opts, callback) {
      opts = opts || {};
      var postBody = createCallRequest; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCall");
      } // verify the required parameter 'createCallRequest' is set


      if (createCallRequest === undefined || createCallRequest === null) {
        throw new Error("Missing the required parameter 'createCallRequest' when calling createCall");
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
      var returnType = _CreateCallResponse["default"];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getCall operation.
     * @callback module:api/CallsApi~getCallCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Call Information
     * Returns near-realtime metadata about the specified call.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {module:api/CallsApi~getCallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallState}
     */

  }, {
    key: "getCall",
    value: function getCall(accountId, callId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCall");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCall");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CallState["default"];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the modifyCall operation.
     * @callback module:api/CallsApi~modifyCallCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Call
     * Interrupts and replaces an active call's BXML document.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {module:model/ModifyCallRequest} modifyCallRequest 
     * @param {module:api/CallsApi~modifyCallCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "modifyCall",
    value: function modifyCall(accountId, callId, modifyCallRequest, opts, callback) {
      opts = opts || {};
      var postBody = modifyCallRequest; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling modifyCall");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling modifyCall");
      } // verify the required parameter 'modifyCallRequest' is set


      if (modifyCallRequest === undefined || modifyCallRequest === null) {
        throw new Error("Missing the required parameter 'modifyCallRequest' when calling modifyCall");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return CallsApi;
}();

exports["default"] = CallsApi;