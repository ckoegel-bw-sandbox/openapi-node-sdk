# NodeSdk.MFAApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messagingTwoFactor**](MFAApi.md#messagingTwoFactor) | **POST** /accounts/{accountId}/code/messaging | Messaging Authentication
[**verifyTwoFactor**](MFAApi.md#verifyTwoFactor) | **POST** /accounts/{accountId}/code/verify | Verify Authentication Code
[**voiceTwoFactor**](MFAApi.md#voiceTwoFactor) | **POST** /accounts/{accountId}/code/voice | Voice Authentication



## messagingTwoFactor

> TwoFactorMessagingResponse messagingTwoFactor(accountId, twoFactorCodeRequestSchema)

Messaging Authentication

Multi-Factor authentication with Bandwidth Messaging services. Allows a user to send an MFA code via a text message (SMS).

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MFAApi();
let accountId = "accountId_example"; // String | Bandwidth Account ID with Messaging service enabled
let twoFactorCodeRequestSchema = new NodeSdk.TwoFactorCodeRequestSchema(); // TwoFactorCodeRequestSchema | 
apiInstance.messagingTwoFactor(accountId, twoFactorCodeRequestSchema, (error, data, response) => {
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
 **accountId** | **String**| Bandwidth Account ID with Messaging service enabled | 
 **twoFactorCodeRequestSchema** | [**TwoFactorCodeRequestSchema**](TwoFactorCodeRequestSchema.md)|  | 

### Return type

[**TwoFactorMessagingResponse**](TwoFactorMessagingResponse.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyTwoFactor

> TwoFactorVerifyCodeResponse verifyTwoFactor(accountId, twoFactorVerifyRequestSchema)

Verify Authentication Code

Allows a user to verify an MFA code.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MFAApi();
let accountId = "accountId_example"; // String | Bandwidth Account ID with Two-Factor enabled
let twoFactorVerifyRequestSchema = new NodeSdk.TwoFactorVerifyRequestSchema(); // TwoFactorVerifyRequestSchema | 
apiInstance.verifyTwoFactor(accountId, twoFactorVerifyRequestSchema, (error, data, response) => {
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
 **accountId** | **String**| Bandwidth Account ID with Two-Factor enabled | 
 **twoFactorVerifyRequestSchema** | [**TwoFactorVerifyRequestSchema**](TwoFactorVerifyRequestSchema.md)|  | 

### Return type

[**TwoFactorVerifyCodeResponse**](TwoFactorVerifyCodeResponse.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## voiceTwoFactor

> TwoFactorVoiceResponse voiceTwoFactor(accountId, twoFactorCodeRequestSchema)

Voice Authentication

Multi-Factor authentication with Bandwidth Voice services. Allows for a user to send an MFA code via a phone call.

### Example

```javascript
import NodeSdk from 'franken_spec';
let defaultClient = NodeSdk.ApiClient.instance;
// Configure HTTP basic authorization: httpBasic
let httpBasic = defaultClient.authentications['httpBasic'];
httpBasic.username = 'YOUR USERNAME';
httpBasic.password = 'YOUR PASSWORD';

let apiInstance = new NodeSdk.MFAApi();
let accountId = "accountId_example"; // String | Bandwidth Account ID with Voice service enabled
let twoFactorCodeRequestSchema = new NodeSdk.TwoFactorCodeRequestSchema(); // TwoFactorCodeRequestSchema | 
apiInstance.voiceTwoFactor(accountId, twoFactorCodeRequestSchema, (error, data, response) => {
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
 **accountId** | **String**| Bandwidth Account ID with Voice service enabled | 
 **twoFactorCodeRequestSchema** | [**TwoFactorCodeRequestSchema**](TwoFactorCodeRequestSchema.md)|  | 

### Return type

[**TwoFactorVoiceResponse**](TwoFactorVoiceResponse.md)

### Authorization

[httpBasic](../README.md#httpBasic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

