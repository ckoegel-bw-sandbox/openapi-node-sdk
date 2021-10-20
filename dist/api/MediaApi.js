"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Media = _interopRequireDefault(require("../model/Media"));

var _MessagingException = _interopRequireDefault(require("../model/MessagingException"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Media service.
* @module api/MediaApi
* @version 1.0.0
*/
var MediaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MediaApi. 
  * @alias module:api/MediaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MediaApi(apiClient) {
    _classCallCheck(this, MediaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(MediaApi, [{
    key: "deleteMedia",
    value: function deleteMedia(accountId, mediaId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteMedia");
      } // verify the required parameter 'mediaId' is set


      if (mediaId === undefined || mediaId === null) {
        throw new Error("Missing the required parameter 'mediaId' when calling deleteMedia");
      }

      var pathParams = {
        'accountId': accountId,
        'mediaId': mediaId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      var basePaths = ['https://messaging.bandwidth.com/api/v2'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/users/{accountId}/media/{mediaId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
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

  }, {
    key: "getMedia",
    value: function getMedia(accountId, mediaId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getMedia");
      } // verify the required parameter 'mediaId' is set


      if (mediaId === undefined || mediaId === null) {
        throw new Error("Missing the required parameter 'mediaId' when calling getMedia");
      }

      var pathParams = {
        'accountId': accountId,
        'mediaId': mediaId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/octet-stream', 'application/json'];
      var returnType = File;
      var basePaths = ['https://messaging.bandwidth.com/api/v2'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/users/{accountId}/media/{mediaId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
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

  }, {
    key: "listMedia",
    value: function listMedia(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listMedia");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      var headerParams = {
        'Continuation-Token': opts['continuationToken']
      };
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Media["default"]];
      var basePaths = ['https://messaging.bandwidth.com/api/v2'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/users/{accountId}/media', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
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

  }, {
    key: "uploadMedia",
    value: function uploadMedia(accountId, mediaId, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling uploadMedia");
      } // verify the required parameter 'mediaId' is set


      if (mediaId === undefined || mediaId === null) {
        throw new Error("Missing the required parameter 'mediaId' when calling uploadMedia");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadMedia");
      }

      var pathParams = {
        'accountId': accountId,
        'mediaId': mediaId
      };
      var queryParams = {};
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Cache-Control': opts['cacheControl']
      };
      var formParams = {};
      var authNames = ['httpBasic'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = null;
      var basePaths = ['https://messaging.bandwidth.com/api/v2'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/users/{accountId}/media/{mediaId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return MediaApi;
}();

exports["default"] = MediaApi;