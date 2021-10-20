# NodeSdk.CallState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callId** | **String** |  | [optional] 
**parentCallId** | **String** |  | [optional] 
**applicationId** | **String** |  | [optional] 
**accountId** | **String** |  | [optional] 
**to** | **String** |  | [optional] 
**from** | **String** |  | [optional] 
**direction** | **String** |  | [optional] 
**state** | **String** | The current state of the call. Current possible values are &#39;initiated&#39;, &#39;answered&#39; and &#39;disconnected&#39;. Additional states may be added in the future, so your application must be tolerant of unknown values. | [optional] 
**identity** | **String** |  | [optional] 
**stirShaken** | **{String: String}** |  | [optional] 
**startTime** | **Date** |  | [optional] 
**answerTime** | **Date** |  | [optional] 
**endTime** | **Date** |  | [optional] 
**disconnectCause** | **String** | The reason the call was disconnected, or null if the call is still active. Current values are &#39;cancel&#39;, &#39;timeout&#39;, &#39;busy&#39;, &#39;rejected&#39;, &#39;hangup&#39;, &#39;invalid-bxml&#39;, &#39;callback-error&#39;, &#39;application-error&#39;, &#39;error&#39;, &#39;account-limit&#39;, &#39;node-capacity-exceeded&#39; and &#39;unknown&#39;. Additional causes may be added in the future, so your application must be tolerant of unknown values. | [optional] 
**errorMessage** | **String** |  | [optional] 
**errorId** | **String** |  | [optional] 
**lastUpdate** | **Date** |  | [optional] 


