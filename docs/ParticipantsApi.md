# NodeSdk.ParticipantsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createParticipant**](ParticipantsApi.md#createParticipant) | **POST** /accounts/{accountId}/participants | Create Participant
[**deleteParticipant**](ParticipantsApi.md#deleteParticipant) | **DELETE** /accounts/{accountId}/participants/{participantId} | Delete Participant
[**getParticipant**](ParticipantsApi.md#getParticipant) | **GET** /accounts/{accountId}/participants/{participantId} | Get Participant



## createParticipant

> InlineResponse200 createParticipant(accountId, opts)

Create Participant

Create a new participant under this account.  Participants are idempotent, so relevant parameters must be set in this function if desired. 

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ParticipantsApi();
let accountId = "accountId_example"; // String | Account ID
let opts = {
  'participant': new NodeSdk.Participant() // Participant | Participant parameters
};
apiInstance.createParticipant(accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| Account ID | 
 **participant** | [**Participant**](Participant.md)| Participant parameters | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteParticipant

> deleteParticipant(accountId, participantId)

Delete Participant

Delete participant by ID.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ParticipantsApi();
let accountId = "accountId_example"; // String | Account ID
let participantId = "participantId_example"; // String | 
apiInstance.deleteParticipant(accountId, participantId, (error, data, response) => {
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
 **accountId** | **String**| Account ID | 
 **participantId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getParticipant

> Participant getParticipant(accountId, participantId)

Get Participant

Get participant by ID.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.ParticipantsApi();
let accountId = "accountId_example"; // String | Account ID
let participantId = "participantId_example"; // String | Participant ID
apiInstance.getParticipant(accountId, participantId, (error, data, response) => {
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
 **accountId** | **String**| Account ID | 
 **participantId** | **String**| Participant ID | 

### Return type

[**Participant**](Participant.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

