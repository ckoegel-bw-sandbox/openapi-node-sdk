# NodeSdk.PhoneNumberLookupApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lookupRequest**](PhoneNumberLookupApi.md#lookupRequest) | **POST** /accounts/{accountId}/tnlookup | Create Request
[**lookupRequestStatus**](PhoneNumberLookupApi.md#lookupRequestStatus) | **GET** /accounts/{accountId}/tnlookup/{requestId} | Query Request Status



## lookupRequest

> OrderResponse lookupRequest(accountId, orderRequest)

Create Request

Create a TN Lookup Order.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.PhoneNumberLookupApi();
let accountId = 9998887; // String | The ID of the Bandwidth account that the user belongs to.
let orderRequest = {"tns":["19196104420"]}; // OrderRequest | 
apiInstance.lookupRequest(accountId, orderRequest, (error, data, response) => {
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
 **accountId** | **String**| The ID of the Bandwidth account that the user belongs to. | 
 **orderRequest** | [**OrderRequest**](OrderRequest.md)|  | 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lookupRequestStatus

> OrderStatus lookupRequestStatus(accountId, requestId)

Query Request Status

Query an existing TN Lookup Order.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.PhoneNumberLookupApi();
let accountId = 9998887; // String | The ID of the Bandwidth account that the user belongs to.
let requestId = "requestId_example"; // String | 
apiInstance.lookupRequestStatus(accountId, requestId, (error, data, response) => {
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
 **accountId** | **String**| The ID of the Bandwidth account that the user belongs to. | 
 **requestId** | **String**|  | 

### Return type

[**OrderStatus**](OrderStatus.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

