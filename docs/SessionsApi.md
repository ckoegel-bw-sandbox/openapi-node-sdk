# NodeSdk.SessionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addParticipantToSession**](SessionsApi.md#addParticipantToSession) | **PUT** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId} | Add Participant
[**createSession**](SessionsApi.md#createSession) | **POST** /accounts/{accountId}/sessions | Create Session
[**deleteSession**](SessionsApi.md#deleteSession) | **DELETE** /accounts/{accountId}/sessions/{sessionId} | Delete Session
[**getParticipantSubscriptions**](SessionsApi.md#getParticipantSubscriptions) | **GET** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions | Get Participant Subscriptions
[**getSession**](SessionsApi.md#getSession) | **GET** /accounts/{accountId}/sessions/{sessionId} | Get Session
[**listSessionParticipants**](SessionsApi.md#listSessionParticipants) | **GET** /accounts/{accountId}/sessions/{sessionId}/participants | List Participants
[**removeParticipantFromSession**](SessionsApi.md#removeParticipantFromSession) | **DELETE** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId} | Remove Participant
[**updateParticipantSubscriptions**](SessionsApi.md#updateParticipantSubscriptions) | **PUT** /accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions | Update Participant Subscriptions



## addParticipantToSession

> addParticipantToSession(accountId, sessionId, participantId, opts)

Add Participant

Add a participant to a session.  Subscriptions can optionally be provided as part of this call. 

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let sessionId = "sessionId_example"; // String | Session ID
let participantId = "participantId_example"; // String | Participant ID
let opts = {
  'subscriptions': new NodeSdk.Subscriptions() // Subscriptions | Subscriptions the participant should be created with
};
apiInstance.addParticipantToSession(accountId, sessionId, participantId, opts, (error, data, response) => {
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
 **sessionId** | **String**| Session ID | 
 **participantId** | **String**| Participant ID | 
 **subscriptions** | [**Subscriptions**](Subscriptions.md)| Subscriptions the participant should be created with | [optional] 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSession

> Session createSession(accountId, opts)

Create Session

Create a new session.  Sessions are idempotent, so relevant parameters must be set in this function if desired. 

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let opts = {
  'session': new NodeSdk.Session() // Session | Session parameters
};
apiInstance.createSession(accountId, opts, (error, data, response) => {
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
 **session** | [**Session**](Session.md)| Session parameters | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSession

> deleteSession(accountId, sessionId)

Delete Session

Delete session by ID.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let sessionId = "sessionId_example"; // String | Session ID
apiInstance.deleteSession(accountId, sessionId, (error, data, response) => {
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
 **sessionId** | **String**| Session ID | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getParticipantSubscriptions

> Subscriptions getParticipantSubscriptions(accountId, sessionId, participantId)

Get Participant Subscriptions

Get a participant&#39;s subscriptions.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let sessionId = "sessionId_example"; // String | Session ID
let participantId = "participantId_example"; // String | Participant ID
apiInstance.getParticipantSubscriptions(accountId, sessionId, participantId, (error, data, response) => {
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
 **sessionId** | **String**| Session ID | 
 **participantId** | **String**| Participant ID | 

### Return type

[**Subscriptions**](Subscriptions.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSession

> Session getSession(accountId, sessionId)

Get Session

Get session by ID.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let sessionId = "sessionId_example"; // String | Session ID
apiInstance.getSession(accountId, sessionId, (error, data, response) => {
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
 **sessionId** | **String**| Session ID | 

### Return type

[**Session**](Session.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSessionParticipants

> [Participant] listSessionParticipants(accountId, sessionId)

List Participants

List participants in a session.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let sessionId = "sessionId_example"; // String | Session ID
apiInstance.listSessionParticipants(accountId, sessionId, (error, data, response) => {
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
 **sessionId** | **String**| Session ID | 

### Return type

[**[Participant]**](Participant.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeParticipantFromSession

> removeParticipantFromSession(accountId, sessionId, participantId)

Remove Participant

Remove a participant from a session.  This will automatically remove any subscriptions the participant has associated with this session. 

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let sessionId = "sessionId_example"; // String | Session ID
let participantId = "participantId_example"; // String | Participant ID
apiInstance.removeParticipantFromSession(accountId, sessionId, participantId, (error, data, response) => {
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
 **sessionId** | **String**| Session ID | 
 **participantId** | **String**| Participant ID | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateParticipantSubscriptions

> updateParticipantSubscriptions(accountId, sessionId, participantId, opts)

Update Participant Subscriptions

Update a participant&#39;s subscriptions.  This is a full update that will replace the participant&#39;s subscriptions. First call &#x60;getParticipantSubscriptions&#x60; if you need the current subscriptions. Call this function with no &#x60;Subscriptions&#x60; object to remove all subscriptions. 

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.SessionsApi();
let accountId = "accountId_example"; // String | Account ID
let sessionId = "sessionId_example"; // String | Session ID
let participantId = "participantId_example"; // String | Participant ID
let opts = {
  'subscriptions': new NodeSdk.Subscriptions() // Subscriptions | Initial state
};
apiInstance.updateParticipantSubscriptions(accountId, sessionId, participantId, opts, (error, data, response) => {
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
 **sessionId** | **String**| Session ID | 
 **participantId** | **String**| Participant ID | 
 **subscriptions** | [**Subscriptions**](Subscriptions.md)| Initial state | [optional] 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

