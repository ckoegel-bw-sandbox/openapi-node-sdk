# NodeSdk.MessagesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](MessagesApi.md#createMessage) | **POST** /users/{accountId}/messages | Create Message
[**getMessages**](MessagesApi.md#getMessages) | **GET** /users/{accountId}/messages | Get Messages



## createMessage

> BandwidthMessage createMessage(accountId, messageRequest)

Create Message

Endpoint for sending text messages and picture messages using V2 messaging.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MessagesApi();
let accountId = 900000; // String | User's account ID
let messageRequest = new NodeSdk.MessageRequest(); // MessageRequest | 
apiInstance.createMessage(accountId, messageRequest, (error, data, response) => {
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
 **messageRequest** | [**MessageRequest**](MessageRequest.md)|  | 

### Return type

[**BandwidthMessage**](BandwidthMessage.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMessages

> BandwidthMessagesList getMessages(accountId, opts)

Get Messages

Gets a list of messages based on query parameters.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MessagesApi();
let accountId = 900000; // String | User's account ID
let opts = {
  'messageId': 9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6, // String | The ID of the message to search for. Special characters need to be encoded using URL encoding
  'sourceTn': %2B15554443333, // String | The phone number that sent the message
  'destinationTn': %2B15554443333, // String | The phone number that received the message
  'messageStatus': RECEIVED, // String | The status of the message. One of RECEIVED, QUEUED, SENDING, SENT, FAILED, DELIVERED, ACCEPTED, UNDELIVERED
  'messageDirection': OUTBOUND, // String | The direction of the message. One of INBOUND, OUTBOUND
  'carrierName': Verizon, // String | The name of the carrier used for this message. Possible values include, but are not limited to, Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&T should be passed as AT%26T)
  'messageType': mms, // String | The type of the message. One of mms, sms
  'errorCode': 9902, // Number | The error code of the message
  'fromDateTime': 2016-09-14T18:20:16.000Z, // String | The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days.
  'toDateTime': 2016-09-14T18:20:16.000Z, // String | The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days.
  'pageToken': gdEewhcJLQRB5, // String | A base64 encoded value used for pagination of results
  'limit': 50 // Number | The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000
};
apiInstance.getMessages(accountId, opts, (error, data, response) => {
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
 **messageId** | **String**| The ID of the message to search for. Special characters need to be encoded using URL encoding | [optional] 
 **sourceTn** | **String**| The phone number that sent the message | [optional] 
 **destinationTn** | **String**| The phone number that received the message | [optional] 
 **messageStatus** | **String**| The status of the message. One of RECEIVED, QUEUED, SENDING, SENT, FAILED, DELIVERED, ACCEPTED, UNDELIVERED | [optional] 
 **messageDirection** | **String**| The direction of the message. One of INBOUND, OUTBOUND | [optional] 
 **carrierName** | **String**| The name of the carrier used for this message. Possible values include, but are not limited to, Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&amp;T should be passed as AT%26T) | [optional] 
 **messageType** | **String**| The type of the message. One of mms, sms | [optional] 
 **errorCode** | **Number**| The error code of the message | [optional] 
 **fromDateTime** | **String**| The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. | [optional] 
 **toDateTime** | **String**| The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. | [optional] 
 **pageToken** | **String**| A base64 encoded value used for pagination of results | [optional] 
 **limit** | **Number**| The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000 | [optional] 

### Return type

[**BandwidthMessagesList**](BandwidthMessagesList.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

