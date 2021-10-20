# NodeSdk.CallsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCall**](CallsApi.md#createCall) | **POST** /api/v2/accounts/{accountId}/calls | Create Call
[**getCall**](CallsApi.md#getCall) | **GET** /api/v2/accounts/{accountId}/calls/{callId} | Get Call Information
[**modifyCall**](CallsApi.md#modifyCall) | **POST** /api/v2/accounts/{accountId}/calls/{callId} | Update Call



## createCall

> CreateCallResponse createCall(accountId, createCallRequest)

Create Call

Creates an outbound phone call.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.CallsApi();
let accountId = "accountId_example"; // String | 
let createCallRequest = new NodeSdk.CreateCallRequest(); // CreateCallRequest | 
apiInstance.createCall(accountId, createCallRequest, (error, data, response) => {
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
 **createCallRequest** | [**CreateCallRequest**](CreateCallRequest.md)|  | 

### Return type

[**CreateCallResponse**](CreateCallResponse.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCall

> CallState getCall(accountId, callId)

Get Call Information

Returns near-realtime metadata about the specified call.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.CallsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
apiInstance.getCall(accountId, callId, (error, data, response) => {
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

[**CallState**](CallState.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyCall

> modifyCall(accountId, callId, modifyCallRequest)

Update Call

Interrupts and replaces an active call&#39;s BXML document.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.CallsApi();
let accountId = "accountId_example"; // String | 
let callId = "callId_example"; // String | 
let modifyCallRequest = new NodeSdk.ModifyCallRequest(); // ModifyCallRequest | 
apiInstance.modifyCall(accountId, callId, modifyCallRequest, (error, data, response) => {
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
 **modifyCallRequest** | [**ModifyCallRequest**](ModifyCallRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

