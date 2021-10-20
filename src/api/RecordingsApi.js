/**
 * FrankenSpec
 * Bandwidth's Frankensteined API Spec
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import CallRecordingMetadata from '../model/CallRecordingMetadata';
import ModifyCallRecordingRequest from '../model/ModifyCallRecordingRequest';
import TranscribeRecordingRequest from '../model/TranscribeRecordingRequest';
import TranscriptionResponse from '../model/TranscriptionResponse';

/**
* Recordings service.
* @module api/RecordingsApi
* @version 1.0.0
*/
export default class RecordingsApi {

    /**
    * Constructs a new RecordingsApi. 
    * @alias module:api/RecordingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    deleteCallTranscription(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteCallTranscription");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling deleteCallTranscription");
      }
      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling deleteCallTranscription");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    deleteRecording(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecording");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling deleteRecording");
      }
      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling deleteRecording");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    deleteRecordingMedia(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteRecordingMedia");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling deleteRecordingMedia");
      }
      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling deleteRecordingMedia");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    downloadCallRecording(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling downloadCallRecording");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling downloadCallRecording");
      }
      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling downloadCallRecording");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['audio/vnd.wave', 'audio/mpeg', 'application/json'];
      let returnType = File;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    getCallRecording(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCallRecording");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCallRecording");
      }
      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling getCallRecording");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CallRecordingMetadata;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    getCallRecordings(accountId, callId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCallRecordings");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCallRecordings");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CallRecordingMetadata];
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    getCallTranscription(accountId, callId, recordingId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCallTranscription");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCallTranscription");
      }
      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling getCallTranscription");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TranscriptionResponse;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    modifyCallRecordingState(accountId, callId, modifyCallRecordingRequest, opts, callback) {
      opts = opts || {};
      let postBody = modifyCallRecordingRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling modifyCallRecordingState");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling modifyCallRecordingState");
      }
      // verify the required parameter 'modifyCallRecordingRequest' is set
      if (modifyCallRecordingRequest === undefined || modifyCallRecordingRequest === null) {
        throw new Error("Missing the required parameter 'modifyCallRecordingRequest' when calling modifyCallRecordingState");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recording', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    queryCallRecordings(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling queryCallRecordings");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'minStartTime': opts['minStartTime'],
        'maxStartTime': opts['maxStartTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CallRecordingMetadata];
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/recordings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    transcribeCallRecording(accountId, callId, recordingId, transcribeRecordingRequest, opts, callback) {
      opts = opts || {};
      let postBody = transcribeRecordingRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling transcribeCallRecording");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling transcribeCallRecording");
      }
      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw new Error("Missing the required parameter 'recordingId' when calling transcribeCallRecording");
      }
      // verify the required parameter 'transcribeRecordingRequest' is set
      if (transcribeRecordingRequest === undefined || transcribeRecordingRequest === null) {
        throw new Error("Missing the required parameter 'transcribeRecordingRequest' when calling transcribeCallRecording");
      }

      let pathParams = {
        'accountId': accountId,
        'callId': callId,
        'recordingId': recordingId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }


}