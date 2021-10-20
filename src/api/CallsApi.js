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
import CallState from '../model/CallState';
import CreateCallRequest from '../model/CreateCallRequest';
import CreateCallResponse from '../model/CreateCallResponse';
import ModifyCallRequest from '../model/ModifyCallRequest';

/**
* Calls service.
* @module api/CallsApi
* @version 1.0.0
*/
export default class CallsApi {

    /**
    * Constructs a new CallsApi. 
    * @alias module:api/CallsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    createCall(accountId, createCallRequest, opts, callback) {
      opts = opts || {};
      let postBody = createCallRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createCall");
      }
      // verify the required parameter 'createCallRequest' is set
      if (createCallRequest === undefined || createCallRequest === null) {
        throw new Error("Missing the required parameter 'createCallRequest' when calling createCall");
      }

      let pathParams = {
        'accountId': accountId
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
      let returnType = CreateCallResponse;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    getCall(accountId, callId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCall");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling getCall");
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
      let returnType = CallState;
      let basePaths = ['https://voice.bandwidth.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/api/v2/accounts/{accountId}/calls/{callId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
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
    modifyCall(accountId, callId, modifyCallRequest, opts, callback) {
      opts = opts || {};
      let postBody = modifyCallRequest;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling modifyCall");
      }
      // verify the required parameter 'callId' is set
      if (callId === undefined || callId === null) {
        throw new Error("Missing the required parameter 'callId' when calling modifyCall");
      }
      // verify the required parameter 'modifyCallRequest' is set
      if (modifyCallRequest === undefined || modifyCallRequest === null) {
        throw new Error("Missing the required parameter 'modifyCallRequest' when calling modifyCall");
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
        '/api/v2/accounts/{accountId}/calls/{callId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }


}
