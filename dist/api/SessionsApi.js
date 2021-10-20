"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

var _Session = _interopRequireDefault(require("../model/Session"));

var _Subscriptions = _interopRequireDefault(require("../model/Subscriptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Sessions service.
* @module api/SessionsApi
* @version 1.0.0
*/
var SessionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SessionsApi. 
  * @alias module:api/SessionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SessionsApi(apiClient) {
    _classCallCheck(this, SessionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addParticipantToSession operation.
   * @callback module:api/SessionsApi~addParticipantToSessionCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add Participant
   * Add a participant to a session.  Subscriptions can optionally be provided as part of this call. 
   * @param {String} accountId Account ID
   * @param {String} sessionId Session ID
   * @param {String} participantId Participant ID
   * @param {Object} opts Optional parameters
   * @param {module:model/Subscriptions} opts.subscriptions Subscriptions the participant should be created with
   * @param {module:api/SessionsApi~addParticipantToSessionCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SessionsApi, [{
    key: "addParticipantToSession",
    value: function addParticipantToSession(accountId, sessionId, participantId, opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptions']; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling addParticipantToSession");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new _Error["default"]("Missing the required parameter 'sessionId' when calling addParticipantToSession");
      } // verify the required parameter 'participantId' is set


      if (participantId === undefined || participantId === null) {
        throw new _Error["default"]("Missing the required parameter 'participantId' when calling addParticipantToSession");
      }

      var pathParams = {
        'accountId': accountId,
        'sessionId': sessionId,
        'participantId': participantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = ['application/json'];
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

      return this.apiClient.callApi('/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the createSession operation.
     * @callback module:api/SessionsApi~createSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Session} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Session
     * Create a new session.  Sessions are idempotent, so relevant parameters must be set in this function if desired. 
     * @param {String} accountId Account ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Session} opts.session Session parameters
     * @param {module:api/SessionsApi~createSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Session}
     */

  }, {
    key: "createSession",
    value: function createSession(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['session']; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling createSession");
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
      var returnType = _Session["default"];
      var basePaths = ['https://api.webrtc.bandwidth.com/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new _Error["default"]("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/sessions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the deleteSession operation.
     * @callback module:api/SessionsApi~deleteSessionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Session
     * Delete session by ID.
     * @param {String} accountId Account ID
     * @param {String} sessionId Session ID
     * @param {module:api/SessionsApi~deleteSessionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteSession",
    value: function deleteSession(accountId, sessionId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling deleteSession");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new _Error["default"]("Missing the required parameter 'sessionId' when calling deleteSession");
      }

      var pathParams = {
        'accountId': accountId,
        'sessionId': sessionId
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

      return this.apiClient.callApi('/accounts/{accountId}/sessions/{sessionId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getParticipantSubscriptions operation.
     * @callback module:api/SessionsApi~getParticipantSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Participant Subscriptions
     * Get a participant's subscriptions.
     * @param {String} accountId Account ID
     * @param {String} sessionId Session ID
     * @param {String} participantId Participant ID
     * @param {module:api/SessionsApi~getParticipantSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscriptions}
     */

  }, {
    key: "getParticipantSubscriptions",
    value: function getParticipantSubscriptions(accountId, sessionId, participantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling getParticipantSubscriptions");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new _Error["default"]("Missing the required parameter 'sessionId' when calling getParticipantSubscriptions");
      } // verify the required parameter 'participantId' is set


      if (participantId === undefined || participantId === null) {
        throw new _Error["default"]("Missing the required parameter 'participantId' when calling getParticipantSubscriptions");
      }

      var pathParams = {
        'accountId': accountId,
        'sessionId': sessionId,
        'participantId': participantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Subscriptions["default"];
      var basePaths = ['https://api.webrtc.bandwidth.com/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new _Error["default"]("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getSession operation.
     * @callback module:api/SessionsApi~getSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Session} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Session
     * Get session by ID.
     * @param {String} accountId Account ID
     * @param {String} sessionId Session ID
     * @param {module:api/SessionsApi~getSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Session}
     */

  }, {
    key: "getSession",
    value: function getSession(accountId, sessionId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling getSession");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new _Error["default"]("Missing the required parameter 'sessionId' when calling getSession");
      }

      var pathParams = {
        'accountId': accountId,
        'sessionId': sessionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Session["default"];
      var basePaths = ['https://api.webrtc.bandwidth.com/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new _Error["default"]("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/sessions/{sessionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the listSessionParticipants operation.
     * @callback module:api/SessionsApi~listSessionParticipantsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Participant>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Participants
     * List participants in a session.
     * @param {String} accountId Account ID
     * @param {String} sessionId Session ID
     * @param {module:api/SessionsApi~listSessionParticipantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Participant>}
     */

  }, {
    key: "listSessionParticipants",
    value: function listSessionParticipants(accountId, sessionId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling listSessionParticipants");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new _Error["default"]("Missing the required parameter 'sessionId' when calling listSessionParticipants");
      }

      var pathParams = {
        'accountId': accountId,
        'sessionId': sessionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Participant["default"]];
      var basePaths = ['https://api.webrtc.bandwidth.com/v1'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new _Error["default"]("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/accounts/{accountId}/sessions/{sessionId}/participants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the removeParticipantFromSession operation.
     * @callback module:api/SessionsApi~removeParticipantFromSessionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Participant
     * Remove a participant from a session.  This will automatically remove any subscriptions the participant has associated with this session. 
     * @param {String} accountId Account ID
     * @param {String} sessionId Session ID
     * @param {String} participantId Participant ID
     * @param {module:api/SessionsApi~removeParticipantFromSessionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeParticipantFromSession",
    value: function removeParticipantFromSession(accountId, sessionId, participantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling removeParticipantFromSession");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new _Error["default"]("Missing the required parameter 'sessionId' when calling removeParticipantFromSession");
      } // verify the required parameter 'participantId' is set


      if (participantId === undefined || participantId === null) {
        throw new _Error["default"]("Missing the required parameter 'participantId' when calling removeParticipantFromSession");
      }

      var pathParams = {
        'accountId': accountId,
        'sessionId': sessionId,
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

      return this.apiClient.callApi('/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the updateParticipantSubscriptions operation.
     * @callback module:api/SessionsApi~updateParticipantSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Participant Subscriptions
     * Update a participant's subscriptions.  This is a full update that will replace the participant's subscriptions. First call `getParticipantSubscriptions` if you need the current subscriptions. Call this function with no `Subscriptions` object to remove all subscriptions. 
     * @param {String} accountId Account ID
     * @param {String} sessionId Session ID
     * @param {String} participantId Participant ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscriptions} opts.subscriptions Initial state
     * @param {module:api/SessionsApi~updateParticipantSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateParticipantSubscriptions",
    value: function updateParticipantSubscriptions(accountId, sessionId, participantId, opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptions']; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling updateParticipantSubscriptions");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new _Error["default"]("Missing the required parameter 'sessionId' when calling updateParticipantSubscriptions");
      } // verify the required parameter 'participantId' is set


      if (participantId === undefined || participantId === null) {
        throw new _Error["default"]("Missing the required parameter 'participantId' when calling updateParticipantSubscriptions");
      }

      var pathParams = {
        'accountId': accountId,
        'sessionId': sessionId,
        'participantId': participantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = ['application/json'];
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

      return this.apiClient.callApi('/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return SessionsApi;
}();

exports["default"] = SessionsApi;