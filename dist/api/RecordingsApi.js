"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _CallRecordingMetadata = _interopRequireDefault(require("../model/CallRecordingMetadata"));

var _ModifyCallRecordingRequest = _interopRequireDefault(require("../model/ModifyCallRecordingRequest"));

var _TranscribeRecordingRequest = _interopRequireDefault(require("../model/TranscribeRecordingRequest"));

var _TranscriptionResponse = _interopRequireDefault(require("../model/TranscriptionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Recordings service.
* @module api/RecordingsApi
* @version 1.0.0
*/
var RecordingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RecordingsApi. 
  * @alias module:api/RecordingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RecordingsApi(apiClient) {
    _classCallCheck(this, RecordingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteCallTranscription operation.
   * @callback module:api/RecordingsApi~deleteCallTranscriptionCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Transcription
   * Deletes the specified recording's transcription.
   * @param {String} accountId 
   * @param {String} callId 
   * @param {String} recordingId 
   * @param {module:api/RecordingsApi~deleteCallTranscriptionCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(RecordingsApi, [{
    key: "deleteCallTranscription",
    value: function deleteCallTranscription(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCallTranscription");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling deleteCallTranscription");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling deleteCallTranscription");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the deleteRecording operation.
     * @callback module:api/RecordingsApi~deleteRecordingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Recording
     * Deletes the specified recording.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {String} recordingId 
     * @param {module:api/RecordingsApi~deleteRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteRecording",
    value: function deleteRecording(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecording");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling deleteRecording");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling deleteRecording");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the deleteRecordingMedia operation.
     * @callback module:api/RecordingsApi~deleteRecordingMediaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Recording Media
     * Deletes the specified recording's media.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {String} recordingId 
     * @param {module:api/RecordingsApi~deleteRecordingMediaCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteRecordingMedia",
    value: function deleteRecordingMedia(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecordingMedia");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling deleteRecordingMedia");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling deleteRecordingMedia");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the downloadCallRecording operation.
     * @callback module:api/RecordingsApi~downloadCallRecordingCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download Recording
     * Downloads the specified recording.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {String} recordingId 
     * @param {module:api/RecordingsApi~downloadCallRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "downloadCallRecording",
    value: function downloadCallRecording(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling downloadCallRecording");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling downloadCallRecording");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling downloadCallRecording");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId,
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getCallRecording operation.
     * @callback module:api/RecordingsApi~getCallRecordingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallRecordingMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Call Recording
     * Returns metadata for the specified recording.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {String} recordingId 
     * @param {module:api/RecordingsApi~getCallRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallRecordingMetadata}
     */

  }, {
    key: "getCallRecording",
    value: function getCallRecording(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCallRecording");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCallRecording");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling getCallRecording");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId,
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getCallRecordings operation.
     * @callback module:api/RecordingsApi~getCallRecordingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CallRecordingMetadata>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Call Recordings
     * Returns a (potentially empty) list of metadata for the recordings that took place during the specified call.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {module:api/RecordingsApi~getCallRecordingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CallRecordingMetadata>}
     */

  }, {
    key: "getCallRecordings",
    value: function getCallRecordings(accountId, callId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCallRecordings");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCallRecordings");
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
      var returnType = [_CallRecordingMetadata["default"]];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the getCallTranscription operation.
     * @callback module:api/RecordingsApi~getCallTranscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TranscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Transcription
     * Downloads the specified transcription.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {String} recordingId 
     * @param {module:api/RecordingsApi~getCallTranscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TranscriptionResponse}
     */

  }, {
    key: "getCallTranscription",
    value: function getCallTranscription(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCallTranscription");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCallTranscription");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling getCallTranscription");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TranscriptionResponse["default"];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the modifyCallRecordingState operation.
     * @callback module:api/RecordingsApi~modifyCallRecordingStateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Recording
     * Pauses or resumes a recording.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {module:model/ModifyCallRecordingRequest} modifyCallRecordingRequest 
     * @param {module:api/RecordingsApi~modifyCallRecordingStateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "modifyCallRecordingState",
    value: function modifyCallRecordingState(accountId, callId, modifyCallRecordingRequest, opts, callback) {
      opts = opts || {};
      var postBody = modifyCallRecordingRequest; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling modifyCallRecordingState");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling modifyCallRecordingState");
      } // verify the required parameter 'modifyCallRecordingRequest' is set


      if (modifyCallRecordingRequest === undefined || modifyCallRecordingRequest === null) {
        throw new Error("Missing the required parameter 'modifyCallRecordingRequest' when calling modifyCallRecordingState");
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recording', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the queryCallRecordings operation.
     * @callback module:api/RecordingsApi~queryCallRecordingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CallRecordingMetadata>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Call Recordings
     * Returns a list of metadata for the recordings associated with the specified account. The list can be filtered by the optional from, to, minStartTime, and maxStartTime arguments. The list is capped at 1000 entries and may be empty if no recordings match the specified criteria.
     * @param {String} accountId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.from 
     * @param {String} opts.to 
     * @param {String} opts.minStartTime 
     * @param {String} opts.maxStartTime 
     * @param {module:api/RecordingsApi~queryCallRecordingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CallRecordingMetadata>}
     */

  }, {
    key: "queryCallRecordings",
    value: function queryCallRecordings(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling queryCallRecordings");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'minStartTime': opts['minStartTime'],
        'maxStartTime': opts['maxStartTime']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CallRecordingMetadata["default"]];
      var basePaths = ['https://voice.bandwidth.com'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/recordings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
    /**
     * Callback function to receive the result of the transcribeCallRecording operation.
     * @callback module:api/RecordingsApi~transcribeCallRecordingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Transcription Request
     * Requests that the specified recording be transcribed.
     * @param {String} accountId 
     * @param {String} callId 
     * @param {String} recordingId 
     * @param {module:model/TranscribeRecordingRequest} transcribeRecordingRequest 
     * @param {module:api/RecordingsApi~transcribeCallRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "transcribeCallRecording",
    value: function transcribeCallRecording(accountId, callId, recordingId, transcribeRecordingRequest, opts, callback) {
      opts = opts || {};
      var postBody = transcribeRecordingRequest; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling transcribeCallRecording");
      } // verify the required parameter 'callId' is set


      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling transcribeCallRecording");
      } // verify the required parameter 'recordingId' is set


      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling transcribeCallRecording");
      } // verify the required parameter 'transcribeRecordingRequest' is set


      if (transcribeRecordingRequest === undefined || transcribeRecordingRequest === null) {
        throw new Error("Missing the required parameter 'transcribeRecordingRequest' when calling transcribeCallRecording");
      }

      var pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
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

      return this.apiClient.callApi('/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return RecordingsApi;
}();

exports["default"] = RecordingsApi;