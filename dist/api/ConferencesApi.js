"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _CallRecordingMetadata = _interopRequireDefault(require("../model/CallRecordingMetadata"));

var _ConferenceMemberState = _interopRequireDefault(require("../model/ConferenceMemberState"));

var _ConferenceRecordingMetadata = _interopRequireDefault(require("../model/ConferenceRecordingMetadata"));

var _ConferenceState = _interopRequireDefault(require("../model/ConferenceState"));

var _ModifyConferenceRequest = _interopRequireDefault(require("../model/ModifyConferenceRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Conferences service.
* @module api/ConferencesApi
* @version 1.0.0
*/
var ConferencesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConferencesApi. 
  * @alias module:api/ConferencesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConferencesApi(apiClient) {
    _classCallCheck(this, ConferencesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the downloadConferenceRecording operation.
   * @callback module:api/ConferencesApi~downloadConferenceRecordingCallback
   * @param {String} error Error message, if any.
   * @param {File} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Download Recording
   * Downloads the specified recording.
   * @param {String} accountId 
   * @param {String} conferenceId 
   * @param {String} recordingId 
   * @param {module:api/ConferencesApi~downloadConferenceRecordingCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link File}
   */


  _createClass(ConferencesApi, [{
    key: "downloadConferenceRecording",
    value: function downloadConferenceRecording(accountId, conferenceId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling downloadConferenceRecording");
      } // verify the required parameter 'conferenceId' is set


      if (conferenceId === undefined || conferenceId === null) {
        throw new Error("Missing the required parameter 'conferenceId' when calling downloadConferenceRecording");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling downloadConferenceRecording");
      }

      var pathParams = {
        'accountId': accountId,
        'conferenceId': conferenceId,
        'recordingId': recordingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['audio/vnd.wave', 'audio/mpeg', 'application/json'];
      var returnType = File;
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId}/media', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getConference operation.
     * @callback module:api/ConferencesApi~getConferenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConferenceState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Conference Information
     * Returns information about the specified conference.
     * @param {String} accountId 
     * @param {String} conferenceId 
     * @param {module:api/ConferencesApi~getConferenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConferenceState}
     */

  }, {
    key: "getConference",
    value: function getConference(accountId, conferenceId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConference");
      } // verify the required parameter 'conferenceId' is set


      if (conferenceId === undefined || conferenceId === null) {
        throw new Error("Missing the required parameter 'conferenceId' when calling getConference");
      }

      var pathParams = {
        'accountId': accountId,
        'conferenceId': conferenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConferenceState["default"];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences/{conferenceId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getConferenceMember operation.
     * @callback module:api/ConferencesApi~getConferenceMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConferenceMemberState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Member Information
     * Returns information about the specified conference member.
     * @param {String} accountId 
     * @param {String} conferenceId 
     * @param {String} memberId 
     * @param {module:api/ConferencesApi~getConferenceMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConferenceMemberState}
     */

  }, {
    key: "getConferenceMember",
    value: function getConferenceMember(accountId, conferenceId, memberId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConferenceMember");
      } // verify the required parameter 'conferenceId' is set


      if (conferenceId === undefined || conferenceId === null) {
        throw new Error("Missing the required parameter 'conferenceId' when calling getConferenceMember");
      } // verify the required parameter 'memberId' is set


      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling getConferenceMember");
      }

      var pathParams = {
        'accountId': accountId,
        'conferenceId': conferenceId,
        'memberId': memberId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConferenceMemberState["default"];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getConferenceRecording operation.
     * @callback module:api/ConferencesApi~getConferenceRecordingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallRecordingMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recording Information
     * Returns metadata for the specified recording.
     * @param {String} accountId 
     * @param {String} conferenceId 
     * @param {String} recordingId 
     * @param {module:api/ConferencesApi~getConferenceRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallRecordingMetadata}
     */

  }, {
    key: "getConferenceRecording",
    value: function getConferenceRecording(accountId, conferenceId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConferenceRecording");
      } // verify the required parameter 'conferenceId' is set


      if (conferenceId === undefined || conferenceId === null) {
        throw new Error("Missing the required parameter 'conferenceId' when calling getConferenceRecording");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling getConferenceRecording");
      }

      var pathParams = {
        'accountId': accountId,
        'conferenceId': conferenceId,
        'recordingId': recordingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CallRecordingMetadata["default"];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getConferenceRecordings operation.
     * @callback module:api/ConferencesApi~getConferenceRecordingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ConferenceRecordingMetadata>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Conference Recordings
     * Returns a (potentially empty) list of metadata for the recordings that took place during the specified conference
     * @param {String} accountId 
     * @param {String} conferenceId 
     * @param {module:api/ConferencesApi~getConferenceRecordingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ConferenceRecordingMetadata>}
     */

  }, {
    key: "getConferenceRecordings",
    value: function getConferenceRecordings(accountId, conferenceId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConferenceRecordings");
      } // verify the required parameter 'conferenceId' is set


      if (conferenceId === undefined || conferenceId === null) {
        throw new Error("Missing the required parameter 'conferenceId' when calling getConferenceRecordings");
      }

      var pathParams = {
        'accountId': accountId,
        'conferenceId': conferenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ConferenceRecordingMetadata["default"]];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getConferences operation.
     * @callback module:api/ConferencesApi~getConferencesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ConferenceState>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Conferences
     * Returns information about the conferences in the account.
     * @param {String} accountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.minCreatedTime 
     * @param {String} opts.maxCreatedTime 
     * @param {Number} opts.pageSize  (default to 1000)
     * @param {String} opts.pageToken 
     * @param {module:api/ConferencesApi~getConferencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ConferenceState>}
     */

  }, {
    key: "getConferences",
    value: function getConferences(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getConferences");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'name': opts['name'],
        'minCreatedTime': opts['minCreatedTime'],
        'maxCreatedTime': opts['maxCreatedTime'],
        'pageSize': opts['pageSize'],
        'pageToken': opts['pageToken']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ConferenceState["default"]];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the modifyConference operation.
     * @callback module:api/ConferencesApi~modifyConferenceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Conference
     * Modify the conference state.
     * @param {String} accountId 
     * @param {String} conferenceId 
     * @param {module:model/ModifyConferenceRequest} modifyConferenceRequest 
     * @param {module:api/ConferencesApi~modifyConferenceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "modifyConference",
    value: function modifyConference(accountId, conferenceId, modifyConferenceRequest, opts, callback) {
      opts = opts || {};
      var postBody = modifyConferenceRequest; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling modifyConference");
      } // verify the required parameter 'conferenceId' is set


      if (conferenceId === undefined || conferenceId === null) {
        throw new Error("Missing the required parameter 'conferenceId' when calling modifyConference");
      } // verify the required parameter 'modifyConferenceRequest' is set


      if (modifyConferenceRequest === undefined || modifyConferenceRequest === null) {
        throw new Error("Missing the required parameter 'modifyConferenceRequest' when calling modifyConference");
      }

      var pathParams = {
        'accountId': accountId,
        'conferenceId': conferenceId
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences/{conferenceId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the modifyConferenceMember operation.
     * @callback module:api/ConferencesApi~modifyConferenceMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Member
     * Updates settings for a particular conference member.
     * @param {String} accountId 
     * @param {String} conferenceId 
     * @param {String} callId 
     * @param {module:model/ConferenceMemberState} conferenceMemberState 
     * @param {module:api/ConferencesApi~modifyConferenceMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "modifyConferenceMember",
    value: function modifyConferenceMember(accountId, conferenceId, callId, conferenceMemberState, opts, callback) {
      opts = opts || {};
      var postBody = conferenceMemberState; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling modifyConferenceMember");
      } // verify the required parameter 'conferenceId' is set


      if (conferenceId === undefined || conferenceId === null) {
        throw new Error("Missing the required parameter 'conferenceId' when calling modifyConferenceMember");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling modifyConferenceMember");
      } // verify the required parameter 'conferenceMemberState' is set


      if (conferenceMemberState === undefined || conferenceMemberState === null) {
        throw new Error("Missing the required parameter 'conferenceMemberState' when calling modifyConferenceMember");
      }

      var pathParams = {
        'accountId': accountId,
        'conferenceId': conferenceId,
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{callId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return ConferencesApi;
}();

exports["default"] = ConferencesApi;