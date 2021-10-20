# NodeSdk.CreateCallRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **String** | Format is E164 | 
**to** | **String** | Format is E164 or SIP URI | 
**uui** | **String** | A comma-separated list of &#39;User-To-User&#39; headers to be sent in the INVITE when calling a SIP URI. Each value must end with an &#39;encoding&#39; parameter as described in https://tools.ietf.org/html/rfc7433. Only &#39;jwt&#39; and &#39;base64&#39; encodings are allowed. The entire value cannot exceed 350 characters, including parameters and separators. | [optional] 
**callTimeout** | **Number** |  | [optional] 
**callbackTimeout** | **Number** |  | [optional] 
**answerUrl** | **String** |  | 
**answerFallbackUrl** | **String** |  | [optional] 
**username** | **String** |  | [optional] 
**password** | **String** |  | [optional] 
**fallbackUsername** | **String** |  | [optional] 
**fallbackPassword** | **String** |  | [optional] 
**answerMethod** | **String** |  | [optional] 
**answerFallbackMethod** | **String** |  | [optional] 
**disconnectUrl** | **String** |  | [optional] 
**disconnectMethod** | **String** |  | [optional] 
**tag** | **String** |  | [optional] 
**applicationId** | **String** |  | 
**machineDetection** | [**MachineDetectionConfiguration**](MachineDetectionConfiguration.md) |  | [optional] 



## Enum: AnswerMethodEnum


* `POST` (value: `"POST"`)

* `GET` (value: `"GET"`)





## Enum: AnswerFallbackMethodEnum


* `POST` (value: `"POST"`)

* `GET` (value: `"GET"`)





## Enum: DisconnectMethodEnum


* `POST` (value: `"POST"`)

* `GET` (value: `"GET"`)




