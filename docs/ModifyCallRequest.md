# NodeSdk.ModifyCallRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **String** |  | [optional] [default to &#39;active&#39;]
**redirectUrl** | **String** | Required if state is &#39;active&#39; | [optional] 
**redirectFallbackUrl** | **String** |  | [optional] 
**redirectMethod** | **String** |  | [optional] 
**redirectFallbackMethod** | **String** |  | [optional] 
**username** | **String** |  | [optional] 
**password** | **String** |  | [optional] 
**fallbackUsername** | **String** |  | [optional] 
**fallbackPassword** | **String** |  | [optional] 
**tag** | **String** |  | [optional] 



## Enum: StateEnum


* `active` (value: `"active"`)

* `completed` (value: `"completed"`)





## Enum: RedirectMethodEnum


* `POST` (value: `"POST"`)

* `GET` (value: `"GET"`)





## Enum: RedirectFallbackMethodEnum


* `POST` (value: `"POST"`)

* `GET` (value: `"GET"`)




