# NodeSdk.MediaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMedia**](MediaApi.md#deleteMedia) | **DELETE** /users/{accountId}/media/{mediaId} | Delete Media
[**getMedia**](MediaApi.md#getMedia) | **GET** /users/{accountId}/media/{mediaId} | Get Media
[**listMedia**](MediaApi.md#listMedia) | **GET** /users/{accountId}/media | List Media
[**uploadMedia**](MediaApi.md#uploadMedia) | **PUT** /users/{accountId}/media/{mediaId} | Upload Media



## deleteMedia

> deleteMedia(accountId, mediaId)

Delete Media

Deletes a media file from Bandwidth API server. Make sure you don&#39;t have any application scripts still using the media before you delete. If you accidentally delete a media file, you can immediately upload a new file with the same name.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MediaApi();
let accountId = 900000; // String | User's account ID
let mediaId = tjdla-4562ld; // String | The media ID to delete
apiInstance.deleteMedia(accountId, mediaId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| User&#39;s account ID | 
 **mediaId** | **String**| The media ID to delete | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMedia

> File getMedia(accountId, mediaId)

Get Media

Downloads a media file you previously uploaded.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MediaApi();
let accountId = 900000; // String | User's account ID
let mediaId = 0a610655-ba58; // String | Media ID to retrieve
apiInstance.getMedia(accountId, mediaId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| User&#39;s account ID | 
 **mediaId** | **String**| Media ID to retrieve | 

### Return type

**File**

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json


## listMedia

> [Media] listMedia(accountId, opts)

List Media

Gets a list of your media files. No query parameters are supported.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MediaApi();
let accountId = 900000; // String | User's account ID
let opts = {
  'continuationToken': 12345 // String | Continuation token used to retrieve subsequent media.
};
apiInstance.listMedia(accountId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| User&#39;s account ID | 
 **continuationToken** | **String**| Continuation token used to retrieve subsequent media. | [optional] 

### Return type

[**[Media]**](Media.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadMedia

> uploadMedia(accountId, mediaId, body, opts)

Upload Media

Uploads a file the normal HTTP way. You may add headers to the request in order to provide some control to your media-file.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MediaApi();
let accountId = 900000; // String | User's account ID
let mediaId = my-media-id; // String | The user supplied custom media ID
let body = "/path/to/file"; // File | 
let opts = {
  'contentType': audio/wav, // String | The media type of the entity-body
  'cacheControl': no-cache // String | General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain.
};
apiInstance.uploadMedia(accountId, mediaId, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| User&#39;s account ID | 
 **mediaId** | **String**| The user supplied custom media ID | 
 **body** | **File**|  | 
 **contentType** | **String**| The media type of the entity-body | [optional] 
 **cacheControl** | **String**| General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain. | [optional] 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

