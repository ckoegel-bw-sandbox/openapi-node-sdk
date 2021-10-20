"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BandwidthMessage = _interopRequireDefault(require("../model/BandwidthMessage"));

var _BandwidthMessagesList = _interopRequireDefault(require("../model/BandwidthMessagesList"));

var _MessageRequest = _interopRequireDefault(require("../model/MessageRequest"));

var _MessagingException = _interopRequireDefault(require("../model/MessagingException"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Messages service.
* @module api/MessagesApi
* @version 1.0.0
*/
var MessagesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MessagesApi. 
  * @alias module:api/MessagesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MessagesApi(apiClient) {
    _classCallCheck(this, MessagesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createMessage operation.
   * @callback module:api/MessagesApi~createMessageCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BandwidthMessage} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Message
   * Endpoint for sending text messages and picture messages using V2 messaging.
   * @param {String} accountId User's account ID
   * @param {module:model/MessageRequest} messageRequest 
   * @param {module:api/MessagesApi~createMessageCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BandwidthMessage}
   */


  _createClass(MessagesApi, [{
    key: "createMessage",
    value: function createMessage(accountId, messageRequest, opts, callback) {
      opts = opts || {};
      var postBody = messageRequest; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createMessage");
      } // verify the required parameter 'messageRequest' is set


      if (messageRequest === undefined || messageRequest === null) {
        throw new Error("Missing the required parameter 'messageRequest' when calling createMessage");
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
      var returnType = _BandwidthMessage["default"];
      var basePaths = ['https://messaging.bandwidth.com/api/v2'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/users/{accountId}/messages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getMessages operation.
     * @callback module:api/MessagesApi~getMessagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BandwidthMessagesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Messages
     * Gets a list of messages based on query parameters.
     * @param {String} accountId User's account ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.messageId The ID of the message to search for. Special characters need to be encoded using URL encoding
     * @param {String} opts.sourceTn The phone number that sent the message
     * @param {String} opts.destinationTn The phone number that received the message
     * @param {String} opts.messageStatus The status of the message. One of RECEIVED, QUEUED, SENDING, SENT, FAILED, DELIVERED, ACCEPTED, UNDELIVERED
     * @param {String} opts.messageDirection The direction of the message. One of INBOUND, OUTBOUND
     * @param {String} opts.carrierName The name of the carrier used for this message. Possible values include, but are not limited to, Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&T should be passed as AT%26T)
     * @param {String} opts.messageType The type of the message. One of mms, sms
     * @param {Number} opts.errorCode The error code of the message
     * @param {String} opts.fromDateTime The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days.
     * @param {String} opts.toDateTime The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days.
     * @param {String} opts.pageToken A base64 encoded value used for pagination of results
     * @param {Number} opts.limit The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000
     * @param {module:api/MessagesApi~getMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BandwidthMessagesList}
     */

  }, {
    key: "getMessages",
    value: function getMessages(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getMessages");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'messageId': opts['messageId'],
        'sourceTn': opts['sourceTn'],
        'destinationTn': opts['destinationTn'],
        'messageStatus': opts['messageStatus'],
        'messageDirection': opts['messageDirection'],
        'carrierName': opts['carrierName'],
        'messageType': opts['messageType'],
        'errorCode': opts['errorCode'],
        'fromDateTime': opts['fromDateTime'],
        'toDateTime': opts['toDateTime'],
        'pageToken': opts['pageToken'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BandwidthMessagesList["default"];
      var basePaths = ['https://messaging.bandwidth.com/api/v2'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/users/{accountId}/messages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return MessagesApi;
}();

exports["default"] = MessagesApi;