# NodeSdk.ConferencesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadConferenceRecording**](ConferencesApi.md#downloadConferenceRecording) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId}/media | Download Recording
[**getConference**](ConferencesApi.md#getConference) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId} | Get Conference Information
[**getConferenceMember**](ConferencesApi.md#getConferenceMember) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{memberId} | Get Member Information
[**getConferenceRecording**](ConferencesApi.md#getConferenceRecording) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId} | Get Recording Information
[**getConferenceRecordings**](ConferencesApi.md#getConferenceRecordings) | **GET** /api/v2/accounts/{accountId}/conferences/{conferenceId}/recordings | Get Conference Recordings
[**getConferences**](ConferencesApi.md#getConferences) | **GET** /api/v2/accounts/{accountId}/conferences | Get Conferences
[**modifyConference**](ConferencesApi.md#modifyConference) | **POST** /api/v2/accounts/{accountId}/conferences/{conferenceId} | Update Conference
[**modifyConferenceMember**](ConferencesApi.md#modifyConferenceMember) | **PUT** /api/v2/accounts/{accountId}/conferences/{conferenceId}/members/{callId} | Update Member



## downloadConferenceRecording

> File downloadConferenceRecording(accountId, conferenceId, recordingId)

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

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let conferenceId = "conferenceId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.downloadConferenceRecording(accountId, conferenceId, recordingId, (error, data, response) => {
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
 **conferenceId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

**File**

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: audio/vnd.wave, audio/mpeg, application/json


## getConference

> ConferenceState getConference(accountId, conferenceId)

Get Conference Information

Returns information about the specified conference.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let conferenceId = "conferenceId_example"; // String | 
apiInstance.getConference(accountId, conferenceId, (error, data, response) => {
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
 **conferenceId** | **String**|  | 

### Return type

[**ConferenceState**](ConferenceState.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConferenceMember

> ConferenceMemberState getConferenceMember(accountId, conferenceId, memberId)

Get Member Information

Returns information about the specified conference member.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let conferenceId = "conferenceId_example"; // String | 
let memberId = "memberId_example"; // String | 
apiInstance.getConferenceMember(accountId, conferenceId, memberId, (error, data, response) => {
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
 **conferenceId** | **String**|  | 
 **memberId** | **String**|  | 

### Return type

[**ConferenceMemberState**](ConferenceMemberState.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConferenceRecording

> CallRecordingMetadata getConferenceRecording(accountId, conferenceId, recordingId)

Get Recording Information

Returns metadata for the specified recording.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let conferenceId = "conferenceId_example"; // String | 
let recordingId = "recordingId_example"; // String | 
apiInstance.getConferenceRecording(accountId, conferenceId, recordingId, (error, data, response) => {
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
 **conferenceId** | **String**|  | 
 **recordingId** | **String**|  | 

### Return type

[**CallRecordingMetadata**](CallRecordingMetadata.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConferenceRecordings

> [ConferenceRecordingMetadata] getConferenceRecordings(accountId, conferenceId)

Get Conference Recordings

Returns a (potentially empty) list of metadata for the recordings that took place during the specified conference

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let conferenceId = "conferenceId_example"; // String | 
apiInstance.getConferenceRecordings(accountId, conferenceId, (error, data, response) => {
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
 **conferenceId** | **String**|  | 

### Return type

[**[ConferenceRecordingMetadata]**](ConferenceRecordingMetadata.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConferences

> [ConferenceState] getConferences(accountId, opts)

Get Conferences

Returns information about the conferences in the account.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let opts = {
  'name': "name_example", // String | 
  'minCreatedTime': "minCreatedTime_example", // String | 
  'maxCreatedTime': "maxCreatedTime_example", // String | 
  'pageSize': 1000, // Number | 
  'pageToken': "pageToken_example" // String | 
};
apiInstance.getConferences(accountId, opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **minCreatedTime** | **String**|  | [optional] 
 **maxCreatedTime** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]
 **pageToken** | **String**|  | [optional] 

### Return type

[**[ConferenceState]**](ConferenceState.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyConference

> modifyConference(accountId, conferenceId, modifyConferenceRequest)

Update Conference

Modify the conference state.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let conferenceId = "conferenceId_example"; // String | 
let modifyConferenceRequest = new NodeSdk.ModifyConferenceRequest(); // ModifyConferenceRequest | 
apiInstance.modifyConference(accountId, conferenceId, modifyConferenceRequest, (error, data, response) => {
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
 **conferenceId** | **String**|  | 
 **modifyConferenceRequest** | [**ModifyConferenceRequest**](ModifyConferenceRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyConferenceMember

> modifyConferenceMember(accountId, conferenceId, callId, conferenceMemberState)

Update Member

Updates settings for a particular conference member.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ConferencesApi();
let accountId = "accountId_example"; // String | 
let conferenceId = "conferenceId_example"; // String | 
let callId = "callId_example"; // String | 
let conferenceMemberState = new NodeSdk.ConferenceMemberState(); // ConferenceMemberState | 
apiInstance.modifyConferenceMember(accountId, conferenceId, callId, conferenceMemberState, (error, data, response) => {
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
 **conferenceId** | **String**|  | 
 **callId** | **String**|  | 
 **conferenceMemberState** | [**ConferenceMemberState**](ConferenceMemberState.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

