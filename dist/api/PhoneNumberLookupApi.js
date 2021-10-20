"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderRequest = _interopRequireDefault(require("../model/OrderRequest"));

var _OrderResponse = _interopRequireDefault(require("../model/OrderResponse"));

var _OrderStatus = _interopRequireDefault(require("../model/OrderStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PhoneNumberLookup service.
* @module api/PhoneNumberLookupApi
* @version 1.0.0
*/
var PhoneNumberLookupApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PhoneNumberLookupApi. 
  * @alias module:api/PhoneNumberLookupApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PhoneNumberLookupApi(apiClient) {
    _classCallCheck(this, PhoneNumberLookupApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the lookupRequest operation.
   * @callback module:api/PhoneNumberLookupApi~lookupRequestCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OrderResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Request
   * Create a TN Lookup Order.
   * @param {String} accountId The ID of the Bandwidth account that the user belongs to.
   * @param {module:model/OrderRequest} orderRequest 
   * @param {module:api/PhoneNumberLookupApi~lookupRequestCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OrderResponse}
   */


  _createClass(PhoneNumberLookupApi, [{
    key: "lookupRequest",
    value: function lookupRequest(accountId, orderRequest, opts, callback) {
      opts = opts || {};
      var postBody = orderRequest; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling lookupRequest");
      } // verify the required parameter 'orderRequest' is set


      if (orderRequest === undefined || orderRequest === null) {
        throw new Error("Missing the required parameter 'orderRequest' when calling lookupRequest");
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
      var returnType = _OrderResponse["default"];
      var basePaths = ['https://numbers.bandwidth.com/api/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/tnlookup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the lookupRequestStatus operation.
     * @callback module:api/PhoneNumberLookupApi~lookupRequestStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Request Status
     * Query an existing TN Lookup Order.
     * @param {String} accountId The ID of the Bandwidth account that the user belongs to.
     * @param {String} requestId 
     * @param {module:api/PhoneNumberLookupApi~lookupRequestStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderStatus}
     */

  }, {
    key: "lookupRequestStatus",
    value: function lookupRequestStatus(accountId, requestId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling lookupRequestStatus");
      } // verify the required parameter 'requestId' is set


      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling lookupRequestStatus");
      }

      var pathParams = {
        'accountId': accountId,
        'requestId': requestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderStatus["default"];
      var basePaths = ['https://numbers.bandwidth.com/api/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/tnlookup/{requestId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return PhoneNumberLookupApi;
}();

exports["default"] = PhoneNumberLookupApi;