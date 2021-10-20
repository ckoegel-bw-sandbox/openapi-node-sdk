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
import Media from '../model/Media';
import MessagingException from '../model/MessagingException';

/**
* Media service.
* @module api/MediaApi
* @version 1.0.0
*/
export default class MediaApi {

    /**
    * Constructs a new MediaApi. 
    * @alias module:api/MediaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteMedia operation.
     * @callback module:api/MediaApi~deleteMediaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Media
     * Deletes a media file from Bandwidth API server. Make sure you don't have any application scripts still using the media before you delete. If you accidentally delete a media file, you can immediately upload a new file with the same name.
     * @param {String} accountId User's account ID
     * @param {String} mediaId The media ID to delete
     * @param {module:api/MediaApi~deleteMediaCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteMedia(accountId, mediaId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteMedia");
      }
      // verify the required parameter 'mediaId' is set
      if (mediaId === undefined || mediaId === null) {
        throw new Error("Missing the required parameter 'mediaId' when calling deleteMedia");
      }

      let pathParams = {
        'accountId': accountId,
        'mediaId': mediaId
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
      let basePaths = ['https://messaging.bandwidth.com/api/v2'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/users/{accountId}/media/{mediaId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the getMedia operation.
     * @callback module:api/MediaApi~getMediaCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Media
     * Downloads a media file you previously uploaded.
     * @param {String} accountId User's account ID
     * @param {String} mediaId Media ID to retrieve
     * @param {module:api/MediaApi~getMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getMedia(accountId, mediaId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getMedia");
      }
      // verify the required parameter 'mediaId' is set
      if (mediaId === undefined || mediaId === null) {
        throw new Error("Missing the required parameter 'mediaId' when calling getMedia");
      }

      let pathParams = {
        'accountId': accountId,
        'mediaId': mediaId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/octet-stream', 'application/json'];
      let returnType = File;
      let basePaths = ['https://messaging.bandwidth.com/api/v2'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/users/{accountId}/media/{mediaId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the listMedia operation.
     * @callback module:api/MediaApi~listMediaCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Media>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Media
     * Gets a list of your media files. No query parameters are supported.
     * @param {String} accountId User's account ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.continuationToken Continuation token used to retrieve subsequent media.
     * @param {module:api/MediaApi~listMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Media>}
     */
    listMedia(accountId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listMedia");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
      };
      let headerParams = {
        'Continuation-Token': opts['continuationToken']
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Media];
      let basePaths = ['https://messaging.bandwidth.com/api/v2'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/users/{accountId}/media', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMedia operation.
     * @callback module:api/MediaApi~uploadMediaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload Media
     * Uploads a file the normal HTTP way. You may add headers to the request in order to provide some control to your media-file.
     * @param {String} accountId User's account ID
     * @param {String} mediaId The user supplied custom media ID
     * @param {File} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType The media type of the entity-body
     * @param {String} opts.cacheControl General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain.
     * @param {module:api/MediaApi~uploadMediaCallback} callback The callback function, accepting three arguments: error, data, response
     */
    uploadMedia(accountId, mediaId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling uploadMedia");
      }
      // verify the required parameter 'mediaId' is set
      if (mediaId === undefined || mediaId === null) {
        throw new Error("Missing the required parameter 'mediaId' when calling uploadMedia");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadMedia");
      }

      let pathParams = {
        'accountId': accountId,
        'mediaId': mediaId
      };
      let queryParams = {
      };
      let headerParams = {
        'Content-Type': opts['contentType'],
        'Cache-Control': opts['cacheControl']
      };
      let formParams = {
      };

      let authNames = ['httpBasic'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = null;
      let basePaths = ['https://messaging.bandwidth.com/api/v2'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/users/{accountId}/media/{mediaId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }


}