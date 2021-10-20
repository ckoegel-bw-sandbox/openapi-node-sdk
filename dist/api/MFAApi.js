"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorWithRequest = _interopRequireDefault(require("../model/ErrorWithRequest"));

var _ForbiddenRequest = _interopRequireDefault(require("../model/ForbiddenRequest"));

var _TwoFactorCodeRequestSchema = _interopRequireDefault(require("../model/TwoFactorCodeRequestSchema"));

var _TwoFactorMessagingResponse = _interopRequireDefault(require("../model/TwoFactorMessagingResponse"));

var _TwoFactorVerifyCodeResponse = _interopRequireDefault(require("../model/TwoFactorVerifyCodeResponse"));

var _TwoFactorVerifyRequestSchema = _interopRequireDefault(require("../model/TwoFactorVerifyRequestSchema"));

var _TwoFactorVoiceResponse = _interopRequireDefault(require("../model/TwoFactorVoiceResponse"));

var _UnauthorizedRequest = _interopRequireDefault(require("../model/UnauthorizedRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* MFA service.
* @module api/MFAApi
* @version 1.0.0
*/
var MFAApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MFAApi. 
  * @alias module:api/MFAApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MFAApi(apiClient) {
    _classCallCheck(this, MFAApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the messagingTwoFactor operation.
   * @callback module:api/MFAApi~messagingTwoFactorCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TwoFactorMessagingResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Messaging Authentication
   * Multi-Factor authentication with Bandwidth Messaging services. Allows a user to send an MFA code via a text message (SMS).
   * @param {String} accountId Bandwidth Account ID with Messaging service enabled
   * @param {module:model/TwoFactorCodeRequestSchema} twoFactorCodeRequestSchema 
   * @param {module:api/MFAApi~messagingTwoFactorCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TwoFactorMessagingResponse}
   */


  _createClass(MFAApi, [{
    key: "messagingTwoFactor",
    value: function messagingTwoFactor(accountId, twoFactorCodeRequestSchema, opts, callback) {
      opts = opts || {};
      var postBody = twoFactorCodeRequestSchema; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling messagingTwoFactor");
      } // verify the required parameter 'twoFactorCodeRequestSchema' is set


      if (twoFactorCodeRequestSchema === undefined || twoFactorCodeRequestSchema === null) {
        throw new Error("Missing the required parameter 'twoFactorCodeRequestSchema' when calling messagingTwoFactor");
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
      var returnType = _TwoFactorMessagingResponse["default"];
      var basePaths = ['https://mfa.bandwidth.com/api/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/code/messaging', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the verifyTwoFactor operation.
     * @callback module:api/MFAApi~verifyTwoFactorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TwoFactorVerifyCodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Authentication Code
     * Allows a user to verify an MFA code.
     * @param {String} accountId Bandwidth Account ID with Two-Factor enabled
     * @param {module:model/TwoFactorVerifyRequestSchema} twoFactorVerifyRequestSchema 
     * @param {module:api/MFAApi~verifyTwoFactorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TwoFactorVerifyCodeResponse}
     */

  }, {
    key: "verifyTwoFactor",
    value: function verifyTwoFactor(accountId, twoFactorVerifyRequestSchema, opts, callback) {
      opts = opts || {};
      var postBody = twoFactorVerifyRequestSchema; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling verifyTwoFactor");
      } // verify the required parameter 'twoFactorVerifyRequestSchema' is set


      if (twoFactorVerifyRequestSchema === undefined || twoFactorVerifyRequestSchema === null) {
        throw new Error("Missing the required parameter 'twoFactorVerifyRequestSchema' when calling verifyTwoFactor");
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
      var returnType = _TwoFactorVerifyCodeResponse["default"];
      var basePaths = ['https://mfa.bandwidth.com/api/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/code/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the voiceTwoFactor operation.
     * @callback module:api/MFAApi~voiceTwoFactorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TwoFactorVoiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Voice Authentication
     * Multi-Factor authentication with Bandwidth Voice services. Allows for a user to send an MFA code via a phone call.
     * @param {String} accountId Bandwidth Account ID with Voice service enabled
     * @param {module:model/TwoFactorCodeRequestSchema} twoFactorCodeRequestSchema 
     * @param {module:api/MFAApi~voiceTwoFactorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TwoFactorVoiceResponse}
     */

  }, {
    key: "voiceTwoFactor",
    value: function voiceTwoFactor(accountId, twoFactorCodeRequestSchema, opts, callback) {
      opts = opts || {};
      var postBody = twoFactorCodeRequestSchema; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling voiceTwoFactor");
      } // verify the required parameter 'twoFactorCodeRequestSchema' is set


      if (twoFactorCodeRequestSchema === undefined || twoFactorCodeRequestSchema === null) {
        throw new Error("Missing the required parameter 'twoFactorCodeRequestSchema' when calling voiceTwoFactor");
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
      var returnType = _TwoFactorVoiceResponse["default"];
      var basePaths = ['https://mfa.bandwidth.com/api/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/code/voice', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return MFAApi;
}();

exports["default"] = MFAApi;