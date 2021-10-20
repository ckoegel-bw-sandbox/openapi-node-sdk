# NodeSdk.RecordingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCallTranscription**](RecordingsApi.md#deleteCallTranscription) | **DELETE** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Delete Transcription
[**deleteRecording**](RecordingsApi.md#deleteRecording) | **DELETE** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Delete Recording
[**deleteRecordingMedia**](RecordingsApi.md#deleteRecordingMedia) | **DELETE** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Delete Recording Media
[**downloadCallRecording**](RecordingsApi.md#downloadCallRecording) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Download Recording
[**getCallRecording**](RecordingsApi.md#getCallRecording) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Get Call Recording
[**getCallRecordings**](RecordingsApi.md#getCallRecordings) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings | Get Call Recordings
[**getCallTranscription**](RecordingsApi.md#getCallTranscription) | **GET** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Get Transcription
[**modifyCallRecordingState**](RecordingsApi.md#modifyCallRecordingState) | **PUT** /api/v2/accounts/{accountId}/calls/{callId}/recording | Update Recording
[**queryCallRecordings**](RecordingsApi.md#queryCallRecordings) | **GET** /api/v2/accounts/{accountId}/recordings | Get Call Recordings
[**transcribeCallRecording**](RecordingsApi.md#transcribeCallRecording) | **POST** /api/v2/accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Create Transcription Request



## deleteCallTranscription

> deleteCallTranscription(accountId, callId, recordingId)

Delete Transcription

Deletes the specified recording&#39;s transcription.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.deleteCallTranscription(accountId, callId, recordingId, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRecording

> deleteRecording(accountId, callId, recordingId)

Delete Recording

Deletes the specified recording.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.deleteRecording(accountId, callId, recordingId, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRecordingMedia

> deleteRecordingMedia(accountId, callId, recordingId)

Delete Recording Media

Deletes the specified recording&#39;s media.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.deleteRecordingMedia(accountId, callId, recordingId, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadCallRecording

> File downloadCallRecording(accountId, callId, recordingId)

Download Recording

Downloads the specified recording.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.downloadCallRecording(accountId, callId, recordingId, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

**File**

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: audio/vnd.wave, audio/mpeg, application/json


## getCallRecording

> CallRecordingMetadata getCallRecording(accountId, callId, recordingId)

Get Call Recording

Returns metadata for the specified recording.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.getCallRecording(accountId, callId, recordingId, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

[**CallRecordingMetadata**](CallRecordingMetadata.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCallRecordings

> [CallRecordingMetadata] getCallRecordings(accountId, callId)

Get Call Recordings

Returns a (potentially empty) list of metadata for the recordings that took place during the specified call.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
apiInstance.getCallRecordings(accountId, callId, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 

### Return type

[**[CallRecordingMetadata]**](CallRecordingMetadata.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCallTranscription

> TranscriptionResponse getCallTranscription(accountId, callId, recordingId)

Get Transcription

Downloads the specified transcription.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.getCallTranscription(accountId, callId, recordingId, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

[**TranscriptionResponse**](TranscriptionResponse.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyCallRecordingState

> modifyCallRecordingState(accountId, callId, modifyCallRecordingRequest)

Update Recording

Pauses or resumes a recording.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let modifyCallRecordingRequest = new NodeSdk.ModifyCallRecordingRequest(); // ModifyCallRecordingRequest | 
apiInstance.modifyCallRecordingState(accountId, callId, modifyCallRecordingRequest, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **modifyCallRecordingRequest** | [**ModifyCallRecordingRequest**](ModifyCallRecordingRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryCallRecordings

> [CallRecordingMetadata] queryCallRecordings(accountId, opts)

Get Call Recordings

Returns a list of metadata for the recordings associated with the specified account. The list can be filtered by the optional from, to, minStartTime, and maxStartTime arguments. The list is capped at 1000 entries and may be empty if no recordings match the specified criteria.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let opts = {
  'from': "from_example", // String | 
  'to': "to_example", // String | 
  'minStartTime': "minStartTime_example", // String | 
  'maxStartTime': "maxStartTime_example" // String | 
};
apiInstance.queryCallRecordings(accountId, opts, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **from** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 
 **minStartTime** | **String**|  | [optional] 
 **maxStartTime** | **String**|  | [optional] 

### Return type

[**[CallRecordingMetadata]**](CallRecordingMetadata.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## transcribeCallRecording

> transcribeCallRecording(accountId, callId, recordingId, transcribeRecordingRequest)

Create Transcription Request

Requests that the specified recording be transcribed.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.RecordingsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
let transcribeRecordingRequest = new NodeSdk.TranscribeRecordingRequest(); // TranscribeRecordingRequest | 
apiInstance.transcribeCallRecording(accountId, callId, recordingId, transcribeRecordingRequest, (error, data, response) => {
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
 **accountId** | **String**|  | 
 **callId** | **String**|  | 
 **recordingId** | **String**|  | 
 **transcribeRecordingRequest** | [**TranscribeRecordingRequest**](TranscribeRecordingRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

